'use client';

import {useState, useEffect} from 'react';
import {Showcase} from '@/components/Showcase';
import {MpSdk} from '@matterport/webcomponent';
import {WebComponent} from '@/components/WebComponent';

// 'NEXT_PUBLIC_MODEL_ID' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `'abcdefghijk'`.
const modelId = process.env.NEXT_PUBLIC_MODEL_ID;

//TODO: Add getStaticProps() - https://blog.logrocket.com/using-next-js-with-typescript/
const Home = () => {
  const [sdk, setSdk] = useState<MpSdk>(null);
  const className = 'relative w-[60rem] h-[40rem]';

  useEffect(() => {
    const init = async () => {
      if (sdk != null) {
        console.debug('Home: sdk', sdk);
      }
    };

    init();
  }, [sdk]);

  return (
    <main className='flex min-h-screen flex-col p-8'>
      {/* TODO: Avoid 2 instances loading */}
      {/* <Showcase modelId={modelId} containerClassName='showcase' className={className} /> */}

      <WebComponent modelId={modelId} containerClassName='showcase' className={className} setMpSdk={setSdk} />
    </main>
  );
};

export default Home;
