
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const Cta = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real implementation, this would connect to an API
    console.log(values);
    toast({
      title: "Added to waitlist!",
      description: "We'll notify you when Coinomad launches.",
    });
    form.reset();
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coinomad-primary to-yellow-500 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Join the Coinomad Waitlist
          </h2>
          <p className="text-black text-opacity-80 text-lg mb-10 md:text-xl">
            Be among the first to experience simple, reliable crypto payroll.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="projectName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Project Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your project or company" 
                          {...field} 
                          className="bg-white/90 border-none text-black placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-900" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          type="email" 
                          {...field} 
                          className="bg-white/90 border-none text-black placeholder:text-gray-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-900" />
                    </FormItem>
                  )}
                />
              </div>
              <Button 
                type="submit" 
                className="bg-black hover:bg-opacity-90 text-coinomad-primary font-medium text-lg px-8 py-6 rounded-lg"
              >
                Join Waitlist
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Cta;
