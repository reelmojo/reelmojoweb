import CustomerSupportForm from '@/components/customer-support-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Mail } from 'lucide-react'; // Using MessageCircle as a proxy for WhatsApp

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          We're here to help! Reach out via WhatsApp for quick questions or use our AI support tool for detailed inquiries.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Quick Chat</CardTitle>
            <CardDescription>Need a fast answer? Chat with us on WhatsApp.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Our team is available on WhatsApp for general inquiries, quick support, or feedback.</p>
            <Button asChild size="lg" className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white">
              <a 
                href="https://wa.me/YOURPHONENUMBER" // Replace YOURPHONENUMBER with your actual WhatsApp number e.g. 911234567890
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <div className="text-sm text-muted-foreground">
              (Please replace `YOURPHONENUMBER` in the link with your actual WhatsApp business number.)
            </div>
            <div className="flex items-center pt-4">
                <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                <a href="mailto:support@reelmojo.com" className="text-primary hover:underline">support@reelmojo.com</a>
            </div>
          </CardContent>
        </Card>

        <CustomerSupportForm />
      </section>
    </div>
  );
}
