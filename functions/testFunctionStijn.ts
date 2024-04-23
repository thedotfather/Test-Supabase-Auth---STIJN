import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';

export function testLogToConsole(targMsg:string) {
    console.log("IK BEN INGELOGD:  " + targMsg);

    authCallback();

}



async function authCallback() {
  // Logic to handle the callback

  // After callback handling
  // ...
  const result = await ensurePlasmicAppUser({
    email: 'stijn@thedotfather.com',
    appSecret: 'Hao9U6XJArm4RU20B7YbjDKcuhVX32JsVmM0ujICzTkUlREht3cVyPcj3H9Hh0toaoc6mqUn9WKVi2ujJVCg'
  });

  // The function won't throw an error, but will return an error message instead
  if (result.error) {
    // Error handling
    console.error(result.error);
  }

  const { user: plasmicUser, token: plasmicUserToken } = result;

  // Store the token in a cookie or session
  // ...
  console.log("LOGGED IN AS: (plasmicUser) =>");
  console.log(plasmicUser);
}