import '~/styles/globals.scss'
import '~/styles/tailwind.scss'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import apolloClient from "~/lib/apollo";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
};

export default MyApp
