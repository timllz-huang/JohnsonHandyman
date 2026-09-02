"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Get your plumbing sorted today
        </h2>
        <p className="text-medium">
          We come to you, find the problem, and fix it properly. No mess left
          behind.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Quote">Quote</Button>
          <Button title="Call" variant="secondary">
            Call
          </Button>
        </div>
      </div>
    </section>
  );
}
