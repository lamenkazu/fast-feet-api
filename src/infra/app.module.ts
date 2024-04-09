import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";

import { envSchema } from "./env/env";
import { EnvModule } from "./env/env.module";
import { HttpModule } from "./http/http.module";
import { AuthModule } from "./auth/auth.module";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true, // Para não configurar em todos os módulos da aplicação.
    }),
    EnvModule,
    HttpModule,
    AuthModule,
    EventsModule,
  ],
})
export class AppModule {}
