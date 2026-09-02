"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Renovations</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">Bathroom renovations</h1>
        <p className="text-medium">
          A complete refit handled by one family team from first fix to final
          clean
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Quote">Quote</Button>
          <Button title="Projects" variant="secondary">
            Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
