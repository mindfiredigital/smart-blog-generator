import React, { useState } from "react";
import { ChevronRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import OpenAiService from "../service/openAiService";

const formSchema = z.object({
  apiKey: z.string().min(1, {
    message: "Please enter valid apiKey !!",
  }),
});
const GetApiKey = ({ setApiKey, setValidated }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apiKey: "",
    },
  });
  const onSubmit = ({ apiKey }) => {
    setLoading(true);
    OpenAiService.validateApiKey(apiKey)
      .then((res) => {
        const modelPresent = res.data.data.some(
          (item) => item.id === "gpt-3.5-turbo"
        );
        setApiKey(apiKey);
        setLoading(false);
        if (modelPresent) {
          setValidated(true);
        }
      })
      .catch((Err) => {
        setApiKey(apiKey);
        setLoading(false);
      });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter OpenAi Key"
                  {...field}
                  className="bg-slate-100 border-slate-300"
                />
              </FormControl>
              <FormMessage className="text-orange-600" />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          type="submit"
          disabled={loading}
          className="bg-slate-200 border-slate-300 w-full hover:bg-emerald-300"
        >
          {!loading ? (
            <>
              Next <ChevronRightIcon className="h-4 w-4" />
            </>
          ) : (
            <>
              Validating <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default GetApiKey;
