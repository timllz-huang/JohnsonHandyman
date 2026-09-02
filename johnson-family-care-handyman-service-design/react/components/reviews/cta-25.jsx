"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Ready to talk about your job
        </h2>
        <p className="text-medium">
          Call us on 0400 123 456 or send an email to
          hello@johnsonpropertysolutions.com.au and we will get back to you
          within one business day.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Get a quote">Get a quote</Button>
          <Button title="Call now" variant="secondary">
            Call now
          </Button>
        </div>
      </div>
    </section>
  );
}
