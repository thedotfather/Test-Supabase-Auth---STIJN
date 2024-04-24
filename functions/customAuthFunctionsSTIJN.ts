import { getPlasmicAppUserFromToken } from '@plasmicapp/auth-api';
import { PlasmicRootProvider, PlasmicComponent, ComponentRenderData } from '@plasmicapp/loader-nextjs';
import { GetServerSideProps } from 'next';
import { PLASMIC } from '../plasmic-init';

export default function performGetPlasmicAppUserFromToken(plasmicUserToken: string) {
    
    getPlasmicAppUserFromToken({ token: plasmicUserToken });
    console.log("TEST | Executed getPlasmicAppUserFromToken");

}
