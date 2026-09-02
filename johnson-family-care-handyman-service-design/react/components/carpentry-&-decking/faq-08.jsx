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
            Straight answers about timber, approvals, and how long the work
            takes
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
              What timber do you use?
            </p>
            <p>
              We work with treated pine, merbau, spotted gum, and composite
              decking. The right choice depends on your budget, the look you
              want, and how much maintenance you are willing to do. We will walk
              you through the options before you commit.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do I need council approval?
            </p>
            <p>
              Most decks and pergolas under a certain size do not need approval,
              but some do. We check the rules for your specific property and
              handle the paperwork if it is required. You will not be left
              guessing.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How long does a deck take?
            </p>
            <p>
              A standard timber deck usually takes one to two weeks from start
              to finish. Larger builds or complex pergolas can take longer. We
              give you a clear timeline in your quote and stick to it.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Will you clean up after?
            </p>
            <p>
              Yes. We treat your home like our own. We sweep, remove offcuts,
              and take away the rubbish before we call the job done. You should
              not have to lift a finger.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you repair old decks?
            </p>
            <p>
              We do. We can replace rotten boards, reinforce joists, and
              re-stain tired timber. If a full rebuild is the better option, we
              will tell you honestly and explain why.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
