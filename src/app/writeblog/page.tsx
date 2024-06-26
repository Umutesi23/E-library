"use client";

import { useState } from "react";
import Nav from "../component/nav";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { clear } from "console";
import { useBlogContext } from "@/lib/BlogContext";
import { v4 } from "uuid";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//IMPORTS

//Z

const formSchema = z.object({
  author: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(20, { message: "Name must not be more than 15 characters" }),
  writing: z
    .string()
    .min(100, {
      message: "Your blog post must be at least 100 characters.",
    })
    .max(4000, {
      message: "Your blog post must not be more than 4000 characters",
    }),
});

//FUNCTION

export default function Writeblog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      writing: "",
    },
  });

  async function handleBlog(data: z.infer<typeof formSchema>) {
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.author,
        blogPost: data.writing,
      }),
    });
    form.reset();
  }
  return (
    <div className=" space-y-[10vh]">
      <Nav />
      <div className=" p-[4vw] w-[50vw] h-fit m-auto border-[#41554F] border-[1.3vw] rounded-xl">
        <Form {...form}>
          <form
            id="myform"
            onSubmit={form.handleSubmit(handleBlog)}
            className="w-2/3 space-y-6 m-auto h-[23vw]"
          >
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-[#41554F] font-semibold text-[1.15vw]">
                    Author
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Name"
                      {...field}
                      className=" border-[0.2vw] border-[#41554F] rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="writing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-[#41554F] font-semibold text-[1.15vw]">
                    Blog
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write here......."
                      {...field}
                      className=" border-[0.2vw] border-[#41554F] rounded-xl h-[10vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className=" border-[0.2vw] border-[#A8A8A4] rounded-xl bg-[#41554F] text-[#E9E4D9] hover:text-[#41554F] font-semibold"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
