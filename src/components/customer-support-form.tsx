'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { handleSupportRequest, type SupportFormState } from '@/app/contact/actions';
import { SERVICE_TERMS_PLACEHOLDER } from '@/lib/constants';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState: SupportFormState = {
  message: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? 'Generating Response...' : 'Get AI Draft Response'}
    </Button>
  );
}

export default function CustomerSupportForm() {
  const [state, formAction] = useFormState(handleSupportRequest, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Support Assistant</CardTitle>
        <CardDescription>
          Have a question or issue? Describe it below, and our AI will help draft a response based on our service terms and general knowledge.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="customerInquiry">Your Inquiry</Label>
            <Textarea
              id="customerInquiry"
              name="customerInquiry"
              placeholder="Please describe your question or issue in detail..."
              rows={5}
              required
              aria-describedby="customerInquiry-error"
            />
            {state.errors?.customerInquiry && (
              <p id="customerInquiry-error" className="text-sm text-destructive">
                {state.errors.customerInquiry.join(', ')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="serviceTerms">Service Terms (for context)</Label>
            <Textarea
              id="serviceTerms"
              name="serviceTerms"
              defaultValue={SERVICE_TERMS_PLACEHOLDER}
              rows={8}
              readOnly 
              className="text-xs bg-muted/50"
            />
             <p className="text-xs text-muted-foreground">
              These are the service terms our AI will reference. They are pre-filled for this demonstration.
            </p>
            {state.errors?.serviceTerms && (
               <p id="serviceTerms-error" className="text-sm text-destructive">
                {state.errors.serviceTerms.join(', ')}
              </p>
            )}
          </div>
          
          {state.draftResponse && state.success && (
            <Alert variant="default" className="bg-green-50 border-green-300 dark:bg-green-900 dark:border-green-700">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-700 dark:text-green-300">AI Drafted Response:</AlertTitle>
              <AlertDescription className="text-sm text-green-700 dark:text-green-400 whitespace-pre-wrap">
                {state.draftResponse}
              </AlertDescription>
            </Alert>
          )}
           {!state.success && state.message && (
             <Alert variant="destructive">
               <AlertCircle className="h-5 w-5" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>{state.message}</AlertDescription>
             </Alert>
           )}

        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
