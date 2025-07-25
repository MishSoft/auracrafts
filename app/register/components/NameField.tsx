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

export default function NameField({ onNext }: { onNext: () => void }) {
  const [nameField, setNameField] = useState("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>შეიყვანეთ თქვენი სახელი</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          onChange={(e) => setNameField(e.target.value)}
          placeholder="მაგალითად: ნიკა"
        />
      </CardContent>
      <CardFooter>
        <Button onClick={onNext} disabled={nameField !== "" ? false : true}>
          შემდეგი
        </Button>
      </CardFooter>
    </Card>
  );
}
