import { useForm } from "react-hook-form";
import CardWrapper from "./card-wrapper";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>()
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't Have acoount"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
