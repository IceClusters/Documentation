import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { IconFolder, IconFile} from '@tabler/icons-react';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const iconico = "https://iceclusters.github.io/docs/static/ice-icon.ico";
  
  const url = `https://iceclusters.github.io/docs${asPath}`;
  const description = frontMatter.description || "Documentation for Ice Cluster resources";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={iconico} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <link rel="icon" href={iconico} id="__link-icon"></link>
      <link rel="apple-touch-icon" href={iconico}></link>
      <link rel="preload" as="image" href={iconico}></link>
      <meta property="og:image" content="https://media.discordapp.net/attachments/1004681367214370877/1167820424290242620/iceGradientBg.jpg" />
      <meta property="og:image:alt" content="Ice Cluster" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256"></meta>
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Ice Cluster';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://i.imgur.com/Rq0zGjA.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Ice Cluster
    </div>
  ),
  
  project: {
    link: 'https://github.com/iceclusters/documentation',
  },
  chat: {
    link: 'https://discord.gg/yGuYP7xD',
  },
  docsRepositoryBase: 'https://github.com/iceclusters/Documentation/blob/main',
  footer: {
    text: 'Ice Cluster',
  },
  head: useHead,
  primaryHue: { dark: 190, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type, route }) {
      const folderRoutes = new Set([
        '/icHud',
        '/icMySQL',
        '/icMySQL/Benchmark',
        '/icMySQL/Features',
        '/icMySQL/Functions',
        '/icMySQL/Functions/MySQL',
        '/icMySQL/Functions/Mongo',
        '/icMySQL/Functions/Redis',
        '/icMySQL/Functions/ORM',
        '/icTrophies',
      ]);

      const isFolder = folderRoutes.has(route);
      const icon = isFolder ? <IconFolder /> : <IconFile />;
      return( 
      <> 
         <div className='nx-items-center nx-justify-between nx-gap-2 nx-flex nx-rounded  nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer'>{icon} {title}</div>
      
      </>
      )
    }
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
