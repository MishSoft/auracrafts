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

export default function PassowrdField({ onNext }: { onNext: () => void }) {
  const [passwordField, setPasswordField] = useState("");
  const [touched, setTouched] = useState(false); // ახალი flag

  function checkPassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    return isLongEnough && hasUpperCase && hasDigit;
  }

  const isValid = checkPassword(passwordField);

  return (
    <Card>
      <CardHeader>
        <CardTitle>შეიყვანეთ პაროლი</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="password"
          onChange={(e) => {
            setPasswordField(e.target.value);
            if (!touched) setTouched(true);
          }}
          placeholder="*********"
        />

        {/* ტექსტი პაროლის მოთხოვნებზე */}
        {!isValid && touched && (
          <p className="text-red-500 text-[16px] mt-2">
            პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, ერთ დიდ ასოს და ერთ ციფრს.
          </p>
        )}
      </CardContent>

      <CardFooter>
        <Button onClick={onNext} disabled={!isValid}>
          შემდეგი
        </Button>
      </CardFooter>
    </Card>
  );
}
