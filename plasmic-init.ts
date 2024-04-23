import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import testFunctionStijn from "../Test-Supabase-Auth---STIJN/functions/testFunctionStijn"

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fpRbHrqwJoPZZqxH9FoEy8",
      token: "ufgoxMpR2XG5vNyarx0dDmxsBS3LUpuCCgwpfPIr70k7ywrLFvLQtsUL5iykD4nB9C5CoaFgeFtT2SUynqAcg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);


// Register custom function
PLASMIC.registerFunction(testFunctionStijn, {
  name: 'testFunctionStijn',
  params: [
    {
      name: 'targMsg',
      type: 'string',
      description: 'The message to log in console'
    }
  ]
});
