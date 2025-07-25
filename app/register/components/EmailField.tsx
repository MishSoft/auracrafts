import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailField({ onNext }: { onNext: () => void }) {
  const [emailField, setEmailField] = useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>შეიყვანეთ თქვენი Gmail</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="email"
          onChange={(e) => setEmailField(e.target.value)}
          placeholder="მაგალითად: nika192@gmail.com"
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={onNext}
          disabled={emailField.includes("@gmail.com") ? false : true}
        >
          შემდეგი
        </Button>
      </CardFooter>
    </Card>
  );
}
