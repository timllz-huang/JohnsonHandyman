"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">Ready when you are</h2>
        <p className="text-medium">
          Tell us what needs fixing or building. We will come out, have a look,
          and give you a straight quote.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Get a quote">Get a quote</Button>
          <Button title="Contact us" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
