"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta40() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Get your free quote today
            </h2>
            <p className="text-medium">
              Tell us what needs doing and we will get back to you with a clear
              price
            </p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form className="mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder="Enter your email" />
                <Button
                  title="Get quote"
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                >
                  Get quote
                </Button>
              </form>
              <p className="text-tiny">
                By clicking Get quote you agree to our terms and conditions.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d1p38huyj6upaa.cloudfront.net/default-22.jpg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
