import { useState } from "react";
import '~/styles/tailwind.scss'
import '~/styles/globals.scss'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '~/lib/apollo';


function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(createApolloClient(''))
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
};

export default MyApp
