import React, { useState } from "react";
import { ChevronRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import OpenAiService from "../service/openAiService";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter valid apiKey !!",
  }),
  instruction: z.string(),
  articlesize: z.string({
    required_error: "Please select article size !!",
  }),
  tone: z.string({
    required_error: "Please select tone for your blog !!",
  }),
});
const BlogGenerateForm = ({ apiKey, setActiveKey, setResult }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      instruction: "",
    },
  });
  const onSubmit = (values) => {
    setLoading(true);
    OpenAiService.generateBlog(apiKey, values)
      .then((res) => {
        let content = res.data.choices[0].message.content;
        if (content) {
          let finalResponse = JSON.parse(content);
          setResult(finalResponse);
          setActiveKey("result");
          console.log(finalResponse);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter blog title"
                  {...field}
                  className="bg-slate-100 border-slate-300"
                />
              </FormControl>
              <FormMessage className="text-orange-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instruction"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  disabled={loading}
                  placeholder="Enter blog instruction (Optional)"
                  {...field}
                  className="bg-slate-100 border-slate-300"
                />
              </FormControl>
              <FormMessage className="text-orange-600" />
            </FormItem>
          )}
        />
        <div className="flex gap-6 justify-between item-center">
          <FormField
            control={form.control}
            name="articlesize"
            render={({ field }) => (
              <FormItem>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                  disabled={loading}
                >
                  <FormControl>
                    <SelectTrigger className="min-w-[188px] bg-slate-100 border-slate-300">
                      <SelectValue placeholder="Select article size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-100 border-slate-300">
                    <SelectGroup>
                      <SelectLabel>Article size</SelectLabel>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage className="text-orange-600" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={loading}
                >
                  <FormControl>
                    <SelectTrigger className="min-w-[188px] bg-slate-100 border-slate-300">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-100 border-slate-300">
                    <SelectGroup>
                      <SelectLabel>Article tone</SelectLabel>
                      <SelectItem value="informative">Informative</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage className="text-orange-600" />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant="secondary"
          type="submit"
          disabled={loading}
          className="bg-slate-200 border-slate-300 w-full hover:bg-emerald-300"
        >
          {!loading ? (
            <>
              Generate <ChevronRightIcon className="h-4 w-4" />
            </>
          ) : (
            <>
              Generating <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default BlogGenerateForm;
