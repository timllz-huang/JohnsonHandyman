"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Recent projects</h2>
          <p className="text-medium">
            A selection of jobs we have finished for our neighbours.
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Merrylands timber deck</a>
              </h3>
              <p>New merbau deck with a pergola over the back door.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Carpentry</a>
                </Badge>
                <Badge>
                  <a href="#">Decking</a>
                </Badge>
                <Badge>
                  <a href="#">Pergola</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Blacktown bathroom refit</a>
              </h3>
              <p>
                Full bathroom renovation with walk-in shower and new tiling.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Bathroom</a>
                </Badge>
                <Badge>
                  <a href="#">Tiling</a>
                </Badge>
                <Badge>
                  <a href="#">Waterproofing</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Parramatta granny flat</a>
              </h3>
              <p>Garage conversion into a one-bedroom granny flat for mum.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Room addition</a>
                </Badge>
                <Badge>
                  <a href="#">Conversion</a>
                </Badge>
                <Badge>
                  <a href="#">Framing</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Penrith front fence</a>
              </h3>
              <p>New timber fence and gate with a fresh coat of paint.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Outdoor</a>
                </Badge>
                <Badge>
                  <a href="#">Fencing</a>
                </Badge>
                <Badge>
                  <a href="#">Painting</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Seven Hills built-ins</a>
              </h3>
              <p>Custom wardrobes and a study nook in the spare room.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Carpentry</a>
                </Badge>
                <Badge>
                  <a href="#">Built-ins</a>
                </Badge>
                <Badge>
                  <a href="#">Custom</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Mount Druitt repairs</a>
              </h3>
              <p>
                Fixed sticky doors, patched plasterboard, and hung new blinds.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Home care</a>
                </Badge>
                <Badge>
                  <a href="#">Repairs</a>
                </Badge>
                <Badge>
                  <a href="#">Hanging</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
