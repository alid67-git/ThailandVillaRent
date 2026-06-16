import { SignInPage } from "@/components/SignInPage";
import { getConfiguredProviders } from "@/auth";

export default function Page() {
  const providers = getConfiguredProviders();
  return <SignInPage providers={providers} />;
}
