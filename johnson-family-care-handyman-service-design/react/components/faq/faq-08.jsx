"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            The basics about our family business, our insurance, and the areas
            we cover across Western Sydney.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Is Johnson Property Solutions family owned?
            </p>
            <p>
              Yes. Two generations of our family work on the tools. You will see
              the same faces from the first quote to the final cleanup.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Are you fully insured?
            </p>
            <p>
              We carry full public liability insurance. We are happy to show you
              the certificates before any work starts.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Which areas do you service?
            </p>
            <p>
              We work across Western Sydney including Penrith, Blacktown,
              Parramatta, and the Hills District. If you are just outside these
              areas, call us and we will see what we can do.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How do I get a free quote?
            </p>
            <p>
              Call us or fill out the form on the Contact page. We will arrange
              a time to come out, look at the job, and give you a straight
              answer.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you handle small jobs?
            </p>
            <p>
              We do. No job is too small for us. If it needs fixing, hanging, or
              patching, we will take care of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
