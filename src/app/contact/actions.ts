'use server';

import { draftSupportResponse, type DraftSupportResponseInput } from '@/ai/flows/customer-support-draft';
import { z } from 'zod';

const SupportRequestSchema = z.object({
  customerInquiry: z.string().min(10, "Inquiry must be at least 10 characters long."),
  serviceTerms: z.string().min(1, "Service terms are required."),
});

export type SupportFormState = {
  message: string | null;
  draftResponse?: string;
  errors?: {
    customerInquiry?: string[];
    serviceTerms?: string[];
  };
  success: boolean;
};

export async function handleSupportRequest(
  prevState: SupportFormState,
  formData: FormData
): Promise<SupportFormState> {
  const validatedFields = SupportRequestSchema.safeParse({
    customerInquiry: formData.get('customerInquiry'),
    serviceTerms: formData.get('serviceTerms'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const input: DraftSupportResponseInput = {
    customerInquiry: validatedFields.data.customerInquiry,
    serviceTerms: validatedFields.data.serviceTerms,
  };

  try {
    const result = await draftSupportResponse(input);
    return {
      message: "Draft response generated successfully.",
      draftResponse: result.draftResponse,
      success: true,
    };
  } catch (error) {
    console.error("Error generating support response:", error);
    return {
      message: "An error occurred while generating the response. Please try again.",
      success: false,
    };
  }
}
