import {AllowedOrigin} from './AllowOrigins'

const corsOptions =  {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void ) =>{
        if(AllowedOrigin.indexOf(origin as string) !== -1 || !origin)
        {
            callback(null, true)
        }else{
            callback(new Error('Not Allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}
export const corsOption = corsOptions 