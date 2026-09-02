"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Simple advice on looking after your deck, bathroom, paintwork, and
            other finished jobs.
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
              How do I maintain my deck?
            </p>
            <p>
              Sweep it regularly and re-oil or re-stain it every year or two. We
              can do this for you if you prefer.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How do I clean new tiles?
            </p>
            <p>
              Use a mild detergent and warm water. Avoid harsh chemicals. We
              will leave you with care instructions after the job.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What if my paint chips later?
            </p>
            <p>
              Keep a small pot of the paint for touch-ups. If you need us to
              come back and patch it, we are happy to.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How often should I clear gutters?
            </p>
            <p>
              Twice a year is a good rule. If you have large trees nearby, more
              often. We can add you to a regular maintenance list.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you offer ongoing maintenance?
            </p>
            <p>
              Yes. Many of our customers have us back each year for gutters,
              decks, and general repairs. It keeps the house in good shape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
