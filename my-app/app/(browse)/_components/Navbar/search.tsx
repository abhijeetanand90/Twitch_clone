"use client";
import { SearchIcon, X } from "lucide-react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState(" ");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;
    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url); // Navigates to the new URL with the query
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex items-center  lg:w-[400px] w-full"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (<X className="text-muted-foreground h-5 w-5 cursor-pointer hover:opacity-75 top-2.5 right-14"  onClick={onClear} />)}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};
