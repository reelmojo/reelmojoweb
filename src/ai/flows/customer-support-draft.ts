// use server'
'use server';
/**
 * @fileOverview AI-powered customer support draft flow.
 *
 * - draftSupportResponse - A function that generates a draft response to a customer inquiry.
 * - DraftSupportResponseInput - The input type for the draftSupportResponse function.
 * - DraftSupportResponseOutput - The return type for the draftSupportResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DraftSupportResponseInputSchema = z.object({
  customerInquiry: z.string().describe('The customer support inquiry.'),
  serviceTerms: z.string().describe('The service terms the customer agreed to.'),
});
export type DraftSupportResponseInput = z.infer<typeof DraftSupportResponseInputSchema>;

const DraftSupportResponseOutputSchema = z.object({
  draftResponse: z.string().describe('A draft response to the customer inquiry.'),
});
export type DraftSupportResponseOutput = z.infer<typeof DraftSupportResponseOutputSchema>;

export async function draftSupportResponse(
  input: DraftSupportResponseInput
): Promise<DraftSupportResponseOutput> {
  return draftSupportResponseFlow(input);
}

const draftSupportResponsePrompt = ai.definePrompt({
  name: 'draftSupportResponsePrompt',
  input: {schema: DraftSupportResponseInputSchema},
  output: {schema: DraftSupportResponseOutputSchema},
  prompt: `You are a customer support agent. You will draft a response to a customer inquiry, referencing service terms and general knowledge.

Customer Inquiry: {{{customerInquiry}}}

Service Terms: {{{serviceTerms}}}

Draft Response:`,
});

const draftSupportResponseFlow = ai.defineFlow(
  {
    name: 'draftSupportResponseFlow',
    inputSchema: DraftSupportResponseInputSchema,
    outputSchema: DraftSupportResponseOutputSchema,
  },
  async input => {
    const {output} = await draftSupportResponsePrompt(input);
    return output!;
  }
);
