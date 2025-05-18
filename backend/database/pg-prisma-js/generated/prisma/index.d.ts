
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model aircrafts
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type aircrafts = $Result.DefaultSelection<Prisma.$aircraftsPayload>
/**
 * Model airlines
 * 
 */
export type airlines = $Result.DefaultSelection<Prisma.$airlinesPayload>
/**
 * Model airports
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type airports = $Result.DefaultSelection<Prisma.$airportsPayload>
/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model extras
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type extras = $Result.DefaultSelection<Prisma.$extrasPayload>
/**
 * Model flights
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type flights = $Result.DefaultSelection<Prisma.$flightsPayload>
/**
 * Model routes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type routes = $Result.DefaultSelection<Prisma.$routesPayload>
/**
 * Model seats
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type seats = $Result.DefaultSelection<Prisma.$seatsPayload>
/**
 * Model tickets
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type tickets = $Result.DefaultSelection<Prisma.$ticketsPayload>
/**
 * Model trips
 * 
 */
export type trips = $Result.DefaultSelection<Prisma.$tripsPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model uses
 * 
 */
export type uses = $Result.DefaultSelection<Prisma.$usesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Aircrafts
 * const aircrafts = await prisma.aircrafts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Aircrafts
   * const aircrafts = await prisma.aircrafts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aircrafts`: Exposes CRUD operations for the **aircrafts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aircrafts
    * const aircrafts = await prisma.aircrafts.findMany()
    * ```
    */
  get aircrafts(): Prisma.aircraftsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airlines`: Exposes CRUD operations for the **airlines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airlines
    * const airlines = await prisma.airlines.findMany()
    * ```
    */
  get airlines(): Prisma.airlinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airports`: Exposes CRUD operations for the **airports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airports
    * const airports = await prisma.airports.findMany()
    * ```
    */
  get airports(): Prisma.airportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extras`: Exposes CRUD operations for the **extras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extras
    * const extras = await prisma.extras.findMany()
    * ```
    */
  get extras(): Prisma.extrasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flights`: Exposes CRUD operations for the **flights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flights.findMany()
    * ```
    */
  get flights(): Prisma.flightsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routes`: Exposes CRUD operations for the **routes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.routes.findMany()
    * ```
    */
  get routes(): Prisma.routesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seats`: Exposes CRUD operations for the **seats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seats.findMany()
    * ```
    */
  get seats(): Prisma.seatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trips`: Exposes CRUD operations for the **trips** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trips.findMany()
    * ```
    */
  get trips(): Prisma.tripsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uses`: Exposes CRUD operations for the **uses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uses
    * const uses = await prisma.uses.findMany()
    * ```
    */
  get uses(): Prisma.usesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    aircrafts: 'aircrafts',
    airlines: 'airlines',
    airports: 'airports',
    bookings: 'bookings',
    extras: 'extras',
    flights: 'flights',
    routes: 'routes',
    seats: 'seats',
    tickets: 'tickets',
    trips: 'trips',
    users: 'users',
    uses: 'uses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aircrafts" | "airlines" | "airports" | "bookings" | "extras" | "flights" | "routes" | "seats" | "tickets" | "trips" | "users" | "uses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      aircrafts: {
        payload: Prisma.$aircraftsPayload<ExtArgs>
        fields: Prisma.aircraftsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aircraftsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aircraftsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>
          }
          findFirst: {
            args: Prisma.aircraftsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aircraftsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>
          }
          findMany: {
            args: Prisma.aircraftsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>[]
          }
          create: {
            args: Prisma.aircraftsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>
          }
          createMany: {
            args: Prisma.aircraftsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.aircraftsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>[]
          }
          delete: {
            args: Prisma.aircraftsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>
          }
          update: {
            args: Prisma.aircraftsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>
          }
          deleteMany: {
            args: Prisma.aircraftsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aircraftsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.aircraftsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>[]
          }
          upsert: {
            args: Prisma.aircraftsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aircraftsPayload>
          }
          aggregate: {
            args: Prisma.AircraftsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAircrafts>
          }
          groupBy: {
            args: Prisma.aircraftsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AircraftsGroupByOutputType>[]
          }
          count: {
            args: Prisma.aircraftsCountArgs<ExtArgs>
            result: $Utils.Optional<AircraftsCountAggregateOutputType> | number
          }
        }
      }
      airlines: {
        payload: Prisma.$airlinesPayload<ExtArgs>
        fields: Prisma.airlinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.airlinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.airlinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>
          }
          findFirst: {
            args: Prisma.airlinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.airlinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>
          }
          findMany: {
            args: Prisma.airlinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>[]
          }
          create: {
            args: Prisma.airlinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>
          }
          createMany: {
            args: Prisma.airlinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.airlinesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>[]
          }
          delete: {
            args: Prisma.airlinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>
          }
          update: {
            args: Prisma.airlinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>
          }
          deleteMany: {
            args: Prisma.airlinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.airlinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.airlinesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>[]
          }
          upsert: {
            args: Prisma.airlinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airlinesPayload>
          }
          aggregate: {
            args: Prisma.AirlinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirlines>
          }
          groupBy: {
            args: Prisma.airlinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirlinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.airlinesCountArgs<ExtArgs>
            result: $Utils.Optional<AirlinesCountAggregateOutputType> | number
          }
        }
      }
      airports: {
        payload: Prisma.$airportsPayload<ExtArgs>
        fields: Prisma.airportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.airportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.airportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>
          }
          findFirst: {
            args: Prisma.airportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.airportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>
          }
          findMany: {
            args: Prisma.airportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>[]
          }
          create: {
            args: Prisma.airportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>
          }
          createMany: {
            args: Prisma.airportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.airportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>[]
          }
          delete: {
            args: Prisma.airportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>
          }
          update: {
            args: Prisma.airportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>
          }
          deleteMany: {
            args: Prisma.airportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.airportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.airportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>[]
          }
          upsert: {
            args: Prisma.airportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$airportsPayload>
          }
          aggregate: {
            args: Prisma.AirportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirports>
          }
          groupBy: {
            args: Prisma.airportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.airportsCountArgs<ExtArgs>
            result: $Utils.Optional<AirportsCountAggregateOutputType> | number
          }
        }
      }
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      extras: {
        payload: Prisma.$extrasPayload<ExtArgs>
        fields: Prisma.extrasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.extrasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.extrasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>
          }
          findFirst: {
            args: Prisma.extrasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.extrasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>
          }
          findMany: {
            args: Prisma.extrasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>[]
          }
          create: {
            args: Prisma.extrasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>
          }
          createMany: {
            args: Prisma.extrasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.extrasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>[]
          }
          delete: {
            args: Prisma.extrasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>
          }
          update: {
            args: Prisma.extrasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>
          }
          deleteMany: {
            args: Prisma.extrasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.extrasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.extrasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>[]
          }
          upsert: {
            args: Prisma.extrasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$extrasPayload>
          }
          aggregate: {
            args: Prisma.ExtrasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtras>
          }
          groupBy: {
            args: Prisma.extrasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtrasGroupByOutputType>[]
          }
          count: {
            args: Prisma.extrasCountArgs<ExtArgs>
            result: $Utils.Optional<ExtrasCountAggregateOutputType> | number
          }
        }
      }
      flights: {
        payload: Prisma.$flightsPayload<ExtArgs>
        fields: Prisma.flightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          findFirst: {
            args: Prisma.flightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          findMany: {
            args: Prisma.flightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>[]
          }
          create: {
            args: Prisma.flightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          createMany: {
            args: Prisma.flightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.flightsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>[]
          }
          delete: {
            args: Prisma.flightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          update: {
            args: Prisma.flightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          deleteMany: {
            args: Prisma.flightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.flightsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>[]
          }
          upsert: {
            args: Prisma.flightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flightsPayload>
          }
          aggregate: {
            args: Prisma.FlightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlights>
          }
          groupBy: {
            args: Prisma.flightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.flightsCountArgs<ExtArgs>
            result: $Utils.Optional<FlightsCountAggregateOutputType> | number
          }
        }
      }
      routes: {
        payload: Prisma.$routesPayload<ExtArgs>
        fields: Prisma.routesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.routesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.routesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>
          }
          findFirst: {
            args: Prisma.routesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.routesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>
          }
          findMany: {
            args: Prisma.routesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>[]
          }
          create: {
            args: Prisma.routesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>
          }
          createMany: {
            args: Prisma.routesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.routesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>[]
          }
          delete: {
            args: Prisma.routesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>
          }
          update: {
            args: Prisma.routesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>
          }
          deleteMany: {
            args: Prisma.routesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.routesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.routesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>[]
          }
          upsert: {
            args: Prisma.routesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routesPayload>
          }
          aggregate: {
            args: Prisma.RoutesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutes>
          }
          groupBy: {
            args: Prisma.routesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutesGroupByOutputType>[]
          }
          count: {
            args: Prisma.routesCountArgs<ExtArgs>
            result: $Utils.Optional<RoutesCountAggregateOutputType> | number
          }
        }
      }
      seats: {
        payload: Prisma.$seatsPayload<ExtArgs>
        fields: Prisma.seatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>
          }
          findFirst: {
            args: Prisma.seatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>
          }
          findMany: {
            args: Prisma.seatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>[]
          }
          create: {
            args: Prisma.seatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>
          }
          createMany: {
            args: Prisma.seatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>[]
          }
          delete: {
            args: Prisma.seatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>
          }
          update: {
            args: Prisma.seatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>
          }
          deleteMany: {
            args: Prisma.seatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.seatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>[]
          }
          upsert: {
            args: Prisma.seatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatsPayload>
          }
          aggregate: {
            args: Prisma.SeatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeats>
          }
          groupBy: {
            args: Prisma.seatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.seatsCountArgs<ExtArgs>
            result: $Utils.Optional<SeatsCountAggregateOutputType> | number
          }
        }
      }
      tickets: {
        payload: Prisma.$ticketsPayload<ExtArgs>
        fields: Prisma.ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findFirst: {
            args: Prisma.ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          findMany: {
            args: Prisma.ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          create: {
            args: Prisma.ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          createMany: {
            args: Prisma.ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ticketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          delete: {
            args: Prisma.ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          update: {
            args: Prisma.ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          deleteMany: {
            args: Prisma.ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ticketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>[]
          }
          upsert: {
            args: Prisma.ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      trips: {
        payload: Prisma.$tripsPayload<ExtArgs>
        fields: Prisma.tripsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tripsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tripsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          findFirst: {
            args: Prisma.tripsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tripsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          findMany: {
            args: Prisma.tripsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>[]
          }
          create: {
            args: Prisma.tripsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          createMany: {
            args: Prisma.tripsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tripsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>[]
          }
          delete: {
            args: Prisma.tripsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          update: {
            args: Prisma.tripsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          deleteMany: {
            args: Prisma.tripsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tripsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tripsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>[]
          }
          upsert: {
            args: Prisma.tripsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripsPayload>
          }
          aggregate: {
            args: Prisma.TripsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrips>
          }
          groupBy: {
            args: Prisma.tripsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tripsCountArgs<ExtArgs>
            result: $Utils.Optional<TripsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      uses: {
        payload: Prisma.$usesPayload<ExtArgs>
        fields: Prisma.usesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          findFirst: {
            args: Prisma.usesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          findMany: {
            args: Prisma.usesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>[]
          }
          create: {
            args: Prisma.usesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          createMany: {
            args: Prisma.usesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>[]
          }
          delete: {
            args: Prisma.usesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          update: {
            args: Prisma.usesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          deleteMany: {
            args: Prisma.usesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>[]
          }
          upsert: {
            args: Prisma.usesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usesPayload>
          }
          aggregate: {
            args: Prisma.UsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUses>
          }
          groupBy: {
            args: Prisma.usesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.usesCountArgs<ExtArgs>
            result: $Utils.Optional<UsesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    aircrafts?: aircraftsOmit
    airlines?: airlinesOmit
    airports?: airportsOmit
    bookings?: bookingsOmit
    extras?: extrasOmit
    flights?: flightsOmit
    routes?: routesOmit
    seats?: seatsOmit
    tickets?: ticketsOmit
    trips?: tripsOmit
    users?: usersOmit
    uses?: usesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AircraftsCountOutputType
   */

  export type AircraftsCountOutputType = {
    flights: number
    seats: number
  }

  export type AircraftsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | AircraftsCountOutputTypeCountFlightsArgs
    seats?: boolean | AircraftsCountOutputTypeCountSeatsArgs
  }

  // Custom InputTypes
  /**
   * AircraftsCountOutputType without action
   */
  export type AircraftsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AircraftsCountOutputType
     */
    select?: AircraftsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AircraftsCountOutputType without action
   */
  export type AircraftsCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flightsWhereInput
  }

  /**
   * AircraftsCountOutputType without action
   */
  export type AircraftsCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seatsWhereInput
  }


  /**
   * Count Type AirlinesCountOutputType
   */

  export type AirlinesCountOutputType = {
    aircrafts: number
    uses: number
  }

  export type AirlinesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | AirlinesCountOutputTypeCountAircraftsArgs
    uses?: boolean | AirlinesCountOutputTypeCountUsesArgs
  }

  // Custom InputTypes
  /**
   * AirlinesCountOutputType without action
   */
  export type AirlinesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlinesCountOutputType
     */
    select?: AirlinesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirlinesCountOutputType without action
   */
  export type AirlinesCountOutputTypeCountAircraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aircraftsWhereInput
  }

  /**
   * AirlinesCountOutputType without action
   */
  export type AirlinesCountOutputTypeCountUsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usesWhereInput
  }


  /**
   * Count Type AirportsCountOutputType
   */

  export type AirportsCountOutputType = {
    routes_routes_departureToairports: number
    routes_routes_destinationToairports: number
  }

  export type AirportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes_routes_departureToairports?: boolean | AirportsCountOutputTypeCountRoutes_routes_departureToairportsArgs
    routes_routes_destinationToairports?: boolean | AirportsCountOutputTypeCountRoutes_routes_destinationToairportsArgs
  }

  // Custom InputTypes
  /**
   * AirportsCountOutputType without action
   */
  export type AirportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportsCountOutputType
     */
    select?: AirportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirportsCountOutputType without action
   */
  export type AirportsCountOutputTypeCountRoutes_routes_departureToairportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: routesWhereInput
  }

  /**
   * AirportsCountOutputType without action
   */
  export type AirportsCountOutputTypeCountRoutes_routes_destinationToairportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: routesWhereInput
  }


  /**
   * Count Type ExtrasCountOutputType
   */

  export type ExtrasCountOutputType = {
    bookings: number
  }

  export type ExtrasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ExtrasCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ExtrasCountOutputType without action
   */
  export type ExtrasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtrasCountOutputType
     */
    select?: ExtrasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExtrasCountOutputType without action
   */
  export type ExtrasCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type FlightsCountOutputType
   */

  export type FlightsCountOutputType = {
    tickets: number
  }

  export type FlightsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | FlightsCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * FlightsCountOutputType without action
   */
  export type FlightsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightsCountOutputType
     */
    select?: FlightsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightsCountOutputType without action
   */
  export type FlightsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
  }


  /**
   * Count Type RoutesCountOutputType
   */

  export type RoutesCountOutputType = {
    flights: number
    uses: number
  }

  export type RoutesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | RoutesCountOutputTypeCountFlightsArgs
    uses?: boolean | RoutesCountOutputTypeCountUsesArgs
  }

  // Custom InputTypes
  /**
   * RoutesCountOutputType without action
   */
  export type RoutesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutesCountOutputType
     */
    select?: RoutesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutesCountOutputType without action
   */
  export type RoutesCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flightsWhereInput
  }

  /**
   * RoutesCountOutputType without action
   */
  export type RoutesCountOutputTypeCountUsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usesWhereInput
  }


  /**
   * Count Type SeatsCountOutputType
   */

  export type SeatsCountOutputType = {
    bookings: number
  }

  export type SeatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SeatsCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * SeatsCountOutputType without action
   */
  export type SeatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatsCountOutputType
     */
    select?: SeatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatsCountOutputType without action
   */
  export type SeatsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type TicketsCountOutputType
   */

  export type TicketsCountOutputType = {
    bookings: number
  }

  export type TicketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TicketsCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketsCountOutputType
     */
    select?: TicketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type TripsCountOutputType
   */

  export type TripsCountOutputType = {
    bookings: number
  }

  export type TripsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TripsCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripsCountOutputType
     */
    select?: TripsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripsCountOutputType without action
   */
  export type TripsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    trips: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UsersCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model aircrafts
   */

  export type AggregateAircrafts = {
    _count: AircraftsCountAggregateOutputType | null
    _avg: AircraftsAvgAggregateOutputType | null
    _sum: AircraftsSumAggregateOutputType | null
    _min: AircraftsMinAggregateOutputType | null
    _max: AircraftsMaxAggregateOutputType | null
  }

  export type AircraftsAvgAggregateOutputType = {
    id: number | null
    seats_capacity: number | null
  }

  export type AircraftsSumAggregateOutputType = {
    id: number | null
    seats_capacity: number | null
  }

  export type AircraftsMinAggregateOutputType = {
    id: number | null
    model: string | null
    seats_capacity: number | null
    owner_name: string | null
  }

  export type AircraftsMaxAggregateOutputType = {
    id: number | null
    model: string | null
    seats_capacity: number | null
    owner_name: string | null
  }

  export type AircraftsCountAggregateOutputType = {
    id: number
    model: number
    seats_capacity: number
    owner_name: number
    _all: number
  }


  export type AircraftsAvgAggregateInputType = {
    id?: true
    seats_capacity?: true
  }

  export type AircraftsSumAggregateInputType = {
    id?: true
    seats_capacity?: true
  }

  export type AircraftsMinAggregateInputType = {
    id?: true
    model?: true
    seats_capacity?: true
    owner_name?: true
  }

  export type AircraftsMaxAggregateInputType = {
    id?: true
    model?: true
    seats_capacity?: true
    owner_name?: true
  }

  export type AircraftsCountAggregateInputType = {
    id?: true
    model?: true
    seats_capacity?: true
    owner_name?: true
    _all?: true
  }

  export type AircraftsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aircrafts to aggregate.
     */
    where?: aircraftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aircrafts to fetch.
     */
    orderBy?: aircraftsOrderByWithRelationInput | aircraftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aircraftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aircrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aircrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aircrafts
    **/
    _count?: true | AircraftsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AircraftsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AircraftsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AircraftsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AircraftsMaxAggregateInputType
  }

  export type GetAircraftsAggregateType<T extends AircraftsAggregateArgs> = {
        [P in keyof T & keyof AggregateAircrafts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAircrafts[P]>
      : GetScalarType<T[P], AggregateAircrafts[P]>
  }




  export type aircraftsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aircraftsWhereInput
    orderBy?: aircraftsOrderByWithAggregationInput | aircraftsOrderByWithAggregationInput[]
    by: AircraftsScalarFieldEnum[] | AircraftsScalarFieldEnum
    having?: aircraftsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AircraftsCountAggregateInputType | true
    _avg?: AircraftsAvgAggregateInputType
    _sum?: AircraftsSumAggregateInputType
    _min?: AircraftsMinAggregateInputType
    _max?: AircraftsMaxAggregateInputType
  }

  export type AircraftsGroupByOutputType = {
    id: number
    model: string | null
    seats_capacity: number | null
    owner_name: string
    _count: AircraftsCountAggregateOutputType | null
    _avg: AircraftsAvgAggregateOutputType | null
    _sum: AircraftsSumAggregateOutputType | null
    _min: AircraftsMinAggregateOutputType | null
    _max: AircraftsMaxAggregateOutputType | null
  }

  type GetAircraftsGroupByPayload<T extends aircraftsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AircraftsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AircraftsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AircraftsGroupByOutputType[P]>
            : GetScalarType<T[P], AircraftsGroupByOutputType[P]>
        }
      >
    >


  export type aircraftsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    seats_capacity?: boolean
    owner_name?: boolean
    airlines?: boolean | airlinesDefaultArgs<ExtArgs>
    flights?: boolean | aircrafts$flightsArgs<ExtArgs>
    seats?: boolean | aircrafts$seatsArgs<ExtArgs>
    _count?: boolean | AircraftsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aircrafts"]>

  export type aircraftsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    seats_capacity?: boolean
    owner_name?: boolean
    airlines?: boolean | airlinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aircrafts"]>

  export type aircraftsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    seats_capacity?: boolean
    owner_name?: boolean
    airlines?: boolean | airlinesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aircrafts"]>

  export type aircraftsSelectScalar = {
    id?: boolean
    model?: boolean
    seats_capacity?: boolean
    owner_name?: boolean
  }

  export type aircraftsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "seats_capacity" | "owner_name", ExtArgs["result"]["aircrafts"]>
  export type aircraftsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | airlinesDefaultArgs<ExtArgs>
    flights?: boolean | aircrafts$flightsArgs<ExtArgs>
    seats?: boolean | aircrafts$seatsArgs<ExtArgs>
    _count?: boolean | AircraftsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type aircraftsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | airlinesDefaultArgs<ExtArgs>
  }
  export type aircraftsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | airlinesDefaultArgs<ExtArgs>
  }

  export type $aircraftsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aircrafts"
    objects: {
      airlines: Prisma.$airlinesPayload<ExtArgs>
      flights: Prisma.$flightsPayload<ExtArgs>[]
      seats: Prisma.$seatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string | null
      seats_capacity: number | null
      owner_name: string
    }, ExtArgs["result"]["aircrafts"]>
    composites: {}
  }

  type aircraftsGetPayload<S extends boolean | null | undefined | aircraftsDefaultArgs> = $Result.GetResult<Prisma.$aircraftsPayload, S>

  type aircraftsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aircraftsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AircraftsCountAggregateInputType | true
    }

  export interface aircraftsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aircrafts'], meta: { name: 'aircrafts' } }
    /**
     * Find zero or one Aircrafts that matches the filter.
     * @param {aircraftsFindUniqueArgs} args - Arguments to find a Aircrafts
     * @example
     * // Get one Aircrafts
     * const aircrafts = await prisma.aircrafts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aircraftsFindUniqueArgs>(args: SelectSubset<T, aircraftsFindUniqueArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aircrafts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aircraftsFindUniqueOrThrowArgs} args - Arguments to find a Aircrafts
     * @example
     * // Get one Aircrafts
     * const aircrafts = await prisma.aircrafts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aircraftsFindUniqueOrThrowArgs>(args: SelectSubset<T, aircraftsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aircrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aircraftsFindFirstArgs} args - Arguments to find a Aircrafts
     * @example
     * // Get one Aircrafts
     * const aircrafts = await prisma.aircrafts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aircraftsFindFirstArgs>(args?: SelectSubset<T, aircraftsFindFirstArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aircrafts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aircraftsFindFirstOrThrowArgs} args - Arguments to find a Aircrafts
     * @example
     * // Get one Aircrafts
     * const aircrafts = await prisma.aircrafts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aircraftsFindFirstOrThrowArgs>(args?: SelectSubset<T, aircraftsFindFirstOrThrowArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aircrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aircraftsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aircrafts
     * const aircrafts = await prisma.aircrafts.findMany()
     * 
     * // Get first 10 Aircrafts
     * const aircrafts = await prisma.aircrafts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aircraftsWithIdOnly = await prisma.aircrafts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends aircraftsFindManyArgs>(args?: SelectSubset<T, aircraftsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aircrafts.
     * @param {aircraftsCreateArgs} args - Arguments to create a Aircrafts.
     * @example
     * // Create one Aircrafts
     * const Aircrafts = await prisma.aircrafts.create({
     *   data: {
     *     // ... data to create a Aircrafts
     *   }
     * })
     * 
     */
    create<T extends aircraftsCreateArgs>(args: SelectSubset<T, aircraftsCreateArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aircrafts.
     * @param {aircraftsCreateManyArgs} args - Arguments to create many Aircrafts.
     * @example
     * // Create many Aircrafts
     * const aircrafts = await prisma.aircrafts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aircraftsCreateManyArgs>(args?: SelectSubset<T, aircraftsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aircrafts and returns the data saved in the database.
     * @param {aircraftsCreateManyAndReturnArgs} args - Arguments to create many Aircrafts.
     * @example
     * // Create many Aircrafts
     * const aircrafts = await prisma.aircrafts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aircrafts and only return the `id`
     * const aircraftsWithIdOnly = await prisma.aircrafts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends aircraftsCreateManyAndReturnArgs>(args?: SelectSubset<T, aircraftsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aircrafts.
     * @param {aircraftsDeleteArgs} args - Arguments to delete one Aircrafts.
     * @example
     * // Delete one Aircrafts
     * const Aircrafts = await prisma.aircrafts.delete({
     *   where: {
     *     // ... filter to delete one Aircrafts
     *   }
     * })
     * 
     */
    delete<T extends aircraftsDeleteArgs>(args: SelectSubset<T, aircraftsDeleteArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aircrafts.
     * @param {aircraftsUpdateArgs} args - Arguments to update one Aircrafts.
     * @example
     * // Update one Aircrafts
     * const aircrafts = await prisma.aircrafts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aircraftsUpdateArgs>(args: SelectSubset<T, aircraftsUpdateArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aircrafts.
     * @param {aircraftsDeleteManyArgs} args - Arguments to filter Aircrafts to delete.
     * @example
     * // Delete a few Aircrafts
     * const { count } = await prisma.aircrafts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aircraftsDeleteManyArgs>(args?: SelectSubset<T, aircraftsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aircrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aircraftsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aircrafts
     * const aircrafts = await prisma.aircrafts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aircraftsUpdateManyArgs>(args: SelectSubset<T, aircraftsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aircrafts and returns the data updated in the database.
     * @param {aircraftsUpdateManyAndReturnArgs} args - Arguments to update many Aircrafts.
     * @example
     * // Update many Aircrafts
     * const aircrafts = await prisma.aircrafts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aircrafts and only return the `id`
     * const aircraftsWithIdOnly = await prisma.aircrafts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends aircraftsUpdateManyAndReturnArgs>(args: SelectSubset<T, aircraftsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aircrafts.
     * @param {aircraftsUpsertArgs} args - Arguments to update or create a Aircrafts.
     * @example
     * // Update or create a Aircrafts
     * const aircrafts = await prisma.aircrafts.upsert({
     *   create: {
     *     // ... data to create a Aircrafts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aircrafts we want to update
     *   }
     * })
     */
    upsert<T extends aircraftsUpsertArgs>(args: SelectSubset<T, aircraftsUpsertArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aircrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aircraftsCountArgs} args - Arguments to filter Aircrafts to count.
     * @example
     * // Count the number of Aircrafts
     * const count = await prisma.aircrafts.count({
     *   where: {
     *     // ... the filter for the Aircrafts we want to count
     *   }
     * })
    **/
    count<T extends aircraftsCountArgs>(
      args?: Subset<T, aircraftsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AircraftsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aircrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AircraftsAggregateArgs>(args: Subset<T, AircraftsAggregateArgs>): Prisma.PrismaPromise<GetAircraftsAggregateType<T>>

    /**
     * Group by Aircrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aircraftsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aircraftsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aircraftsGroupByArgs['orderBy'] }
        : { orderBy?: aircraftsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aircraftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAircraftsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aircrafts model
   */
  readonly fields: aircraftsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aircrafts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aircraftsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airlines<T extends airlinesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, airlinesDefaultArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flights<T extends aircrafts$flightsArgs<ExtArgs> = {}>(args?: Subset<T, aircrafts$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seats<T extends aircrafts$seatsArgs<ExtArgs> = {}>(args?: Subset<T, aircrafts$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the aircrafts model
   */
  interface aircraftsFieldRefs {
    readonly id: FieldRef<"aircrafts", 'Int'>
    readonly model: FieldRef<"aircrafts", 'String'>
    readonly seats_capacity: FieldRef<"aircrafts", 'Int'>
    readonly owner_name: FieldRef<"aircrafts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * aircrafts findUnique
   */
  export type aircraftsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * Filter, which aircrafts to fetch.
     */
    where: aircraftsWhereUniqueInput
  }

  /**
   * aircrafts findUniqueOrThrow
   */
  export type aircraftsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * Filter, which aircrafts to fetch.
     */
    where: aircraftsWhereUniqueInput
  }

  /**
   * aircrafts findFirst
   */
  export type aircraftsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * Filter, which aircrafts to fetch.
     */
    where?: aircraftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aircrafts to fetch.
     */
    orderBy?: aircraftsOrderByWithRelationInput | aircraftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aircrafts.
     */
    cursor?: aircraftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aircrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aircrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aircrafts.
     */
    distinct?: AircraftsScalarFieldEnum | AircraftsScalarFieldEnum[]
  }

  /**
   * aircrafts findFirstOrThrow
   */
  export type aircraftsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * Filter, which aircrafts to fetch.
     */
    where?: aircraftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aircrafts to fetch.
     */
    orderBy?: aircraftsOrderByWithRelationInput | aircraftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aircrafts.
     */
    cursor?: aircraftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aircrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aircrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aircrafts.
     */
    distinct?: AircraftsScalarFieldEnum | AircraftsScalarFieldEnum[]
  }

  /**
   * aircrafts findMany
   */
  export type aircraftsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * Filter, which aircrafts to fetch.
     */
    where?: aircraftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aircrafts to fetch.
     */
    orderBy?: aircraftsOrderByWithRelationInput | aircraftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aircrafts.
     */
    cursor?: aircraftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aircrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aircrafts.
     */
    skip?: number
    distinct?: AircraftsScalarFieldEnum | AircraftsScalarFieldEnum[]
  }

  /**
   * aircrafts create
   */
  export type aircraftsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * The data needed to create a aircrafts.
     */
    data: XOR<aircraftsCreateInput, aircraftsUncheckedCreateInput>
  }

  /**
   * aircrafts createMany
   */
  export type aircraftsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aircrafts.
     */
    data: aircraftsCreateManyInput | aircraftsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aircrafts createManyAndReturn
   */
  export type aircraftsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * The data used to create many aircrafts.
     */
    data: aircraftsCreateManyInput | aircraftsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * aircrafts update
   */
  export type aircraftsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * The data needed to update a aircrafts.
     */
    data: XOR<aircraftsUpdateInput, aircraftsUncheckedUpdateInput>
    /**
     * Choose, which aircrafts to update.
     */
    where: aircraftsWhereUniqueInput
  }

  /**
   * aircrafts updateMany
   */
  export type aircraftsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aircrafts.
     */
    data: XOR<aircraftsUpdateManyMutationInput, aircraftsUncheckedUpdateManyInput>
    /**
     * Filter which aircrafts to update
     */
    where?: aircraftsWhereInput
    /**
     * Limit how many aircrafts to update.
     */
    limit?: number
  }

  /**
   * aircrafts updateManyAndReturn
   */
  export type aircraftsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * The data used to update aircrafts.
     */
    data: XOR<aircraftsUpdateManyMutationInput, aircraftsUncheckedUpdateManyInput>
    /**
     * Filter which aircrafts to update
     */
    where?: aircraftsWhereInput
    /**
     * Limit how many aircrafts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * aircrafts upsert
   */
  export type aircraftsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * The filter to search for the aircrafts to update in case it exists.
     */
    where: aircraftsWhereUniqueInput
    /**
     * In case the aircrafts found by the `where` argument doesn't exist, create a new aircrafts with this data.
     */
    create: XOR<aircraftsCreateInput, aircraftsUncheckedCreateInput>
    /**
     * In case the aircrafts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aircraftsUpdateInput, aircraftsUncheckedUpdateInput>
  }

  /**
   * aircrafts delete
   */
  export type aircraftsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    /**
     * Filter which aircrafts to delete.
     */
    where: aircraftsWhereUniqueInput
  }

  /**
   * aircrafts deleteMany
   */
  export type aircraftsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aircrafts to delete
     */
    where?: aircraftsWhereInput
    /**
     * Limit how many aircrafts to delete.
     */
    limit?: number
  }

  /**
   * aircrafts.flights
   */
  export type aircrafts$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    where?: flightsWhereInput
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    cursor?: flightsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * aircrafts.seats
   */
  export type aircrafts$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    where?: seatsWhereInput
    orderBy?: seatsOrderByWithRelationInput | seatsOrderByWithRelationInput[]
    cursor?: seatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatsScalarFieldEnum | SeatsScalarFieldEnum[]
  }

  /**
   * aircrafts without action
   */
  export type aircraftsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
  }


  /**
   * Model airlines
   */

  export type AggregateAirlines = {
    _count: AirlinesCountAggregateOutputType | null
    _min: AirlinesMinAggregateOutputType | null
    _max: AirlinesMaxAggregateOutputType | null
  }

  export type AirlinesMinAggregateOutputType = {
    name: string | null
    password: string | null
    country: string | null
    motto: string | null
  }

  export type AirlinesMaxAggregateOutputType = {
    name: string | null
    password: string | null
    country: string | null
    motto: string | null
  }

  export type AirlinesCountAggregateOutputType = {
    name: number
    password: number
    country: number
    motto: number
    _all: number
  }


  export type AirlinesMinAggregateInputType = {
    name?: true
    password?: true
    country?: true
    motto?: true
  }

  export type AirlinesMaxAggregateInputType = {
    name?: true
    password?: true
    country?: true
    motto?: true
  }

  export type AirlinesCountAggregateInputType = {
    name?: true
    password?: true
    country?: true
    motto?: true
    _all?: true
  }

  export type AirlinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which airlines to aggregate.
     */
    where?: airlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlinesOrderByWithRelationInput | airlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: airlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned airlines
    **/
    _count?: true | AirlinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirlinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirlinesMaxAggregateInputType
  }

  export type GetAirlinesAggregateType<T extends AirlinesAggregateArgs> = {
        [P in keyof T & keyof AggregateAirlines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirlines[P]>
      : GetScalarType<T[P], AggregateAirlines[P]>
  }




  export type airlinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: airlinesWhereInput
    orderBy?: airlinesOrderByWithAggregationInput | airlinesOrderByWithAggregationInput[]
    by: AirlinesScalarFieldEnum[] | AirlinesScalarFieldEnum
    having?: airlinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirlinesCountAggregateInputType | true
    _min?: AirlinesMinAggregateInputType
    _max?: AirlinesMaxAggregateInputType
  }

  export type AirlinesGroupByOutputType = {
    name: string
    password: string
    country: string
    motto: string | null
    _count: AirlinesCountAggregateOutputType | null
    _min: AirlinesMinAggregateOutputType | null
    _max: AirlinesMaxAggregateOutputType | null
  }

  type GetAirlinesGroupByPayload<T extends airlinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirlinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirlinesGroupByOutputType[P]>
            : GetScalarType<T[P], AirlinesGroupByOutputType[P]>
        }
      >
    >


  export type airlinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    password?: boolean
    country?: boolean
    motto?: boolean
    aircrafts?: boolean | airlines$aircraftsArgs<ExtArgs>
    uses?: boolean | airlines$usesArgs<ExtArgs>
    _count?: boolean | AirlinesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airlines"]>

  export type airlinesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    password?: boolean
    country?: boolean
    motto?: boolean
  }, ExtArgs["result"]["airlines"]>

  export type airlinesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    password?: boolean
    country?: boolean
    motto?: boolean
  }, ExtArgs["result"]["airlines"]>

  export type airlinesSelectScalar = {
    name?: boolean
    password?: boolean
    country?: boolean
    motto?: boolean
  }

  export type airlinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "password" | "country" | "motto", ExtArgs["result"]["airlines"]>
  export type airlinesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | airlines$aircraftsArgs<ExtArgs>
    uses?: boolean | airlines$usesArgs<ExtArgs>
    _count?: boolean | AirlinesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type airlinesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type airlinesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $airlinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "airlines"
    objects: {
      aircrafts: Prisma.$aircraftsPayload<ExtArgs>[]
      uses: Prisma.$usesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      password: string
      country: string
      motto: string | null
    }, ExtArgs["result"]["airlines"]>
    composites: {}
  }

  type airlinesGetPayload<S extends boolean | null | undefined | airlinesDefaultArgs> = $Result.GetResult<Prisma.$airlinesPayload, S>

  type airlinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<airlinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirlinesCountAggregateInputType | true
    }

  export interface airlinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['airlines'], meta: { name: 'airlines' } }
    /**
     * Find zero or one Airlines that matches the filter.
     * @param {airlinesFindUniqueArgs} args - Arguments to find a Airlines
     * @example
     * // Get one Airlines
     * const airlines = await prisma.airlines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends airlinesFindUniqueArgs>(args: SelectSubset<T, airlinesFindUniqueArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airlines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {airlinesFindUniqueOrThrowArgs} args - Arguments to find a Airlines
     * @example
     * // Get one Airlines
     * const airlines = await prisma.airlines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends airlinesFindUniqueOrThrowArgs>(args: SelectSubset<T, airlinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlinesFindFirstArgs} args - Arguments to find a Airlines
     * @example
     * // Get one Airlines
     * const airlines = await prisma.airlines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends airlinesFindFirstArgs>(args?: SelectSubset<T, airlinesFindFirstArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airlines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlinesFindFirstOrThrowArgs} args - Arguments to find a Airlines
     * @example
     * // Get one Airlines
     * const airlines = await prisma.airlines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends airlinesFindFirstOrThrowArgs>(args?: SelectSubset<T, airlinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airlines
     * const airlines = await prisma.airlines.findMany()
     * 
     * // Get first 10 Airlines
     * const airlines = await prisma.airlines.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const airlinesWithNameOnly = await prisma.airlines.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends airlinesFindManyArgs>(args?: SelectSubset<T, airlinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airlines.
     * @param {airlinesCreateArgs} args - Arguments to create a Airlines.
     * @example
     * // Create one Airlines
     * const Airlines = await prisma.airlines.create({
     *   data: {
     *     // ... data to create a Airlines
     *   }
     * })
     * 
     */
    create<T extends airlinesCreateArgs>(args: SelectSubset<T, airlinesCreateArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airlines.
     * @param {airlinesCreateManyArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airlines = await prisma.airlines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends airlinesCreateManyArgs>(args?: SelectSubset<T, airlinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airlines and returns the data saved in the database.
     * @param {airlinesCreateManyAndReturnArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airlines = await prisma.airlines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airlines and only return the `name`
     * const airlinesWithNameOnly = await prisma.airlines.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends airlinesCreateManyAndReturnArgs>(args?: SelectSubset<T, airlinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Airlines.
     * @param {airlinesDeleteArgs} args - Arguments to delete one Airlines.
     * @example
     * // Delete one Airlines
     * const Airlines = await prisma.airlines.delete({
     *   where: {
     *     // ... filter to delete one Airlines
     *   }
     * })
     * 
     */
    delete<T extends airlinesDeleteArgs>(args: SelectSubset<T, airlinesDeleteArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airlines.
     * @param {airlinesUpdateArgs} args - Arguments to update one Airlines.
     * @example
     * // Update one Airlines
     * const airlines = await prisma.airlines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends airlinesUpdateArgs>(args: SelectSubset<T, airlinesUpdateArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airlines.
     * @param {airlinesDeleteManyArgs} args - Arguments to filter Airlines to delete.
     * @example
     * // Delete a few Airlines
     * const { count } = await prisma.airlines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends airlinesDeleteManyArgs>(args?: SelectSubset<T, airlinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airlines
     * const airlines = await prisma.airlines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends airlinesUpdateManyArgs>(args: SelectSubset<T, airlinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airlines and returns the data updated in the database.
     * @param {airlinesUpdateManyAndReturnArgs} args - Arguments to update many Airlines.
     * @example
     * // Update many Airlines
     * const airlines = await prisma.airlines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Airlines and only return the `name`
     * const airlinesWithNameOnly = await prisma.airlines.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends airlinesUpdateManyAndReturnArgs>(args: SelectSubset<T, airlinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Airlines.
     * @param {airlinesUpsertArgs} args - Arguments to update or create a Airlines.
     * @example
     * // Update or create a Airlines
     * const airlines = await prisma.airlines.upsert({
     *   create: {
     *     // ... data to create a Airlines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airlines we want to update
     *   }
     * })
     */
    upsert<T extends airlinesUpsertArgs>(args: SelectSubset<T, airlinesUpsertArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlinesCountArgs} args - Arguments to filter Airlines to count.
     * @example
     * // Count the number of Airlines
     * const count = await prisma.airlines.count({
     *   where: {
     *     // ... the filter for the Airlines we want to count
     *   }
     * })
    **/
    count<T extends airlinesCountArgs>(
      args?: Subset<T, airlinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirlinesAggregateArgs>(args: Subset<T, AirlinesAggregateArgs>): Prisma.PrismaPromise<GetAirlinesAggregateType<T>>

    /**
     * Group by Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airlinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends airlinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: airlinesGroupByArgs['orderBy'] }
        : { orderBy?: airlinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, airlinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirlinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the airlines model
   */
  readonly fields: airlinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for airlines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__airlinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aircrafts<T extends airlines$aircraftsArgs<ExtArgs> = {}>(args?: Subset<T, airlines$aircraftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uses<T extends airlines$usesArgs<ExtArgs> = {}>(args?: Subset<T, airlines$usesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the airlines model
   */
  interface airlinesFieldRefs {
    readonly name: FieldRef<"airlines", 'String'>
    readonly password: FieldRef<"airlines", 'String'>
    readonly country: FieldRef<"airlines", 'String'>
    readonly motto: FieldRef<"airlines", 'String'>
  }
    

  // Custom InputTypes
  /**
   * airlines findUnique
   */
  export type airlinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * Filter, which airlines to fetch.
     */
    where: airlinesWhereUniqueInput
  }

  /**
   * airlines findUniqueOrThrow
   */
  export type airlinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * Filter, which airlines to fetch.
     */
    where: airlinesWhereUniqueInput
  }

  /**
   * airlines findFirst
   */
  export type airlinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * Filter, which airlines to fetch.
     */
    where?: airlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlinesOrderByWithRelationInput | airlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for airlines.
     */
    cursor?: airlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of airlines.
     */
    distinct?: AirlinesScalarFieldEnum | AirlinesScalarFieldEnum[]
  }

  /**
   * airlines findFirstOrThrow
   */
  export type airlinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * Filter, which airlines to fetch.
     */
    where?: airlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlinesOrderByWithRelationInput | airlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for airlines.
     */
    cursor?: airlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of airlines.
     */
    distinct?: AirlinesScalarFieldEnum | AirlinesScalarFieldEnum[]
  }

  /**
   * airlines findMany
   */
  export type airlinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * Filter, which airlines to fetch.
     */
    where?: airlinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airlines to fetch.
     */
    orderBy?: airlinesOrderByWithRelationInput | airlinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing airlines.
     */
    cursor?: airlinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airlines.
     */
    skip?: number
    distinct?: AirlinesScalarFieldEnum | AirlinesScalarFieldEnum[]
  }

  /**
   * airlines create
   */
  export type airlinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * The data needed to create a airlines.
     */
    data: XOR<airlinesCreateInput, airlinesUncheckedCreateInput>
  }

  /**
   * airlines createMany
   */
  export type airlinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many airlines.
     */
    data: airlinesCreateManyInput | airlinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * airlines createManyAndReturn
   */
  export type airlinesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * The data used to create many airlines.
     */
    data: airlinesCreateManyInput | airlinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * airlines update
   */
  export type airlinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * The data needed to update a airlines.
     */
    data: XOR<airlinesUpdateInput, airlinesUncheckedUpdateInput>
    /**
     * Choose, which airlines to update.
     */
    where: airlinesWhereUniqueInput
  }

  /**
   * airlines updateMany
   */
  export type airlinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update airlines.
     */
    data: XOR<airlinesUpdateManyMutationInput, airlinesUncheckedUpdateManyInput>
    /**
     * Filter which airlines to update
     */
    where?: airlinesWhereInput
    /**
     * Limit how many airlines to update.
     */
    limit?: number
  }

  /**
   * airlines updateManyAndReturn
   */
  export type airlinesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * The data used to update airlines.
     */
    data: XOR<airlinesUpdateManyMutationInput, airlinesUncheckedUpdateManyInput>
    /**
     * Filter which airlines to update
     */
    where?: airlinesWhereInput
    /**
     * Limit how many airlines to update.
     */
    limit?: number
  }

  /**
   * airlines upsert
   */
  export type airlinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * The filter to search for the airlines to update in case it exists.
     */
    where: airlinesWhereUniqueInput
    /**
     * In case the airlines found by the `where` argument doesn't exist, create a new airlines with this data.
     */
    create: XOR<airlinesCreateInput, airlinesUncheckedCreateInput>
    /**
     * In case the airlines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<airlinesUpdateInput, airlinesUncheckedUpdateInput>
  }

  /**
   * airlines delete
   */
  export type airlinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    /**
     * Filter which airlines to delete.
     */
    where: airlinesWhereUniqueInput
  }

  /**
   * airlines deleteMany
   */
  export type airlinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which airlines to delete
     */
    where?: airlinesWhereInput
    /**
     * Limit how many airlines to delete.
     */
    limit?: number
  }

  /**
   * airlines.aircrafts
   */
  export type airlines$aircraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    where?: aircraftsWhereInput
    orderBy?: aircraftsOrderByWithRelationInput | aircraftsOrderByWithRelationInput[]
    cursor?: aircraftsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AircraftsScalarFieldEnum | AircraftsScalarFieldEnum[]
  }

  /**
   * airlines.uses
   */
  export type airlines$usesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    where?: usesWhereInput
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    cursor?: usesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * airlines without action
   */
  export type airlinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
  }


  /**
   * Model airports
   */

  export type AggregateAirports = {
    _count: AirportsCountAggregateOutputType | null
    _avg: AirportsAvgAggregateOutputType | null
    _sum: AirportsSumAggregateOutputType | null
    _min: AirportsMinAggregateOutputType | null
    _max: AirportsMaxAggregateOutputType | null
  }

  export type AirportsAvgAggregateOutputType = {
    id: number | null
    time_zone: number | null
  }

  export type AirportsSumAggregateOutputType = {
    id: number | null
    time_zone: number | null
  }

  export type AirportsMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    country: string | null
    time_zone: number | null
  }

  export type AirportsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    country: string | null
    time_zone: number | null
  }

  export type AirportsCountAggregateOutputType = {
    id: number
    name: number
    city: number
    country: number
    time_zone: number
    _all: number
  }


  export type AirportsAvgAggregateInputType = {
    id?: true
    time_zone?: true
  }

  export type AirportsSumAggregateInputType = {
    id?: true
    time_zone?: true
  }

  export type AirportsMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    country?: true
    time_zone?: true
  }

  export type AirportsMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    country?: true
    time_zone?: true
  }

  export type AirportsCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    country?: true
    time_zone?: true
    _all?: true
  }

  export type AirportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which airports to aggregate.
     */
    where?: airportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airports to fetch.
     */
    orderBy?: airportsOrderByWithRelationInput | airportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: airportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned airports
    **/
    _count?: true | AirportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportsMaxAggregateInputType
  }

  export type GetAirportsAggregateType<T extends AirportsAggregateArgs> = {
        [P in keyof T & keyof AggregateAirports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirports[P]>
      : GetScalarType<T[P], AggregateAirports[P]>
  }




  export type airportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: airportsWhereInput
    orderBy?: airportsOrderByWithAggregationInput | airportsOrderByWithAggregationInput[]
    by: AirportsScalarFieldEnum[] | AirportsScalarFieldEnum
    having?: airportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportsCountAggregateInputType | true
    _avg?: AirportsAvgAggregateInputType
    _sum?: AirportsSumAggregateInputType
    _min?: AirportsMinAggregateInputType
    _max?: AirportsMaxAggregateInputType
  }

  export type AirportsGroupByOutputType = {
    id: number
    name: string
    city: string
    country: string
    time_zone: number
    _count: AirportsCountAggregateOutputType | null
    _avg: AirportsAvgAggregateOutputType | null
    _sum: AirportsSumAggregateOutputType | null
    _min: AirportsMinAggregateOutputType | null
    _max: AirportsMaxAggregateOutputType | null
  }

  type GetAirportsGroupByPayload<T extends airportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportsGroupByOutputType[P]>
            : GetScalarType<T[P], AirportsGroupByOutputType[P]>
        }
      >
    >


  export type airportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    time_zone?: boolean
    routes_routes_departureToairports?: boolean | airports$routes_routes_departureToairportsArgs<ExtArgs>
    routes_routes_destinationToairports?: boolean | airports$routes_routes_destinationToairportsArgs<ExtArgs>
    _count?: boolean | AirportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airports"]>

  export type airportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    time_zone?: boolean
  }, ExtArgs["result"]["airports"]>

  export type airportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    time_zone?: boolean
  }, ExtArgs["result"]["airports"]>

  export type airportsSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    time_zone?: boolean
  }

  export type airportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "country" | "time_zone", ExtArgs["result"]["airports"]>
  export type airportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes_routes_departureToairports?: boolean | airports$routes_routes_departureToairportsArgs<ExtArgs>
    routes_routes_destinationToairports?: boolean | airports$routes_routes_destinationToairportsArgs<ExtArgs>
    _count?: boolean | AirportsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type airportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type airportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $airportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "airports"
    objects: {
      routes_routes_departureToairports: Prisma.$routesPayload<ExtArgs>[]
      routes_routes_destinationToairports: Prisma.$routesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      country: string
      time_zone: number
    }, ExtArgs["result"]["airports"]>
    composites: {}
  }

  type airportsGetPayload<S extends boolean | null | undefined | airportsDefaultArgs> = $Result.GetResult<Prisma.$airportsPayload, S>

  type airportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<airportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirportsCountAggregateInputType | true
    }

  export interface airportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['airports'], meta: { name: 'airports' } }
    /**
     * Find zero or one Airports that matches the filter.
     * @param {airportsFindUniqueArgs} args - Arguments to find a Airports
     * @example
     * // Get one Airports
     * const airports = await prisma.airports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends airportsFindUniqueArgs>(args: SelectSubset<T, airportsFindUniqueArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {airportsFindUniqueOrThrowArgs} args - Arguments to find a Airports
     * @example
     * // Get one Airports
     * const airports = await prisma.airports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends airportsFindUniqueOrThrowArgs>(args: SelectSubset<T, airportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airportsFindFirstArgs} args - Arguments to find a Airports
     * @example
     * // Get one Airports
     * const airports = await prisma.airports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends airportsFindFirstArgs>(args?: SelectSubset<T, airportsFindFirstArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airportsFindFirstOrThrowArgs} args - Arguments to find a Airports
     * @example
     * // Get one Airports
     * const airports = await prisma.airports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends airportsFindFirstOrThrowArgs>(args?: SelectSubset<T, airportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airports
     * const airports = await prisma.airports.findMany()
     * 
     * // Get first 10 Airports
     * const airports = await prisma.airports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportsWithIdOnly = await prisma.airports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends airportsFindManyArgs>(args?: SelectSubset<T, airportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airports.
     * @param {airportsCreateArgs} args - Arguments to create a Airports.
     * @example
     * // Create one Airports
     * const Airports = await prisma.airports.create({
     *   data: {
     *     // ... data to create a Airports
     *   }
     * })
     * 
     */
    create<T extends airportsCreateArgs>(args: SelectSubset<T, airportsCreateArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airports.
     * @param {airportsCreateManyArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airports = await prisma.airports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends airportsCreateManyArgs>(args?: SelectSubset<T, airportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airports and returns the data saved in the database.
     * @param {airportsCreateManyAndReturnArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airports = await prisma.airports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airports and only return the `id`
     * const airportsWithIdOnly = await prisma.airports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends airportsCreateManyAndReturnArgs>(args?: SelectSubset<T, airportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Airports.
     * @param {airportsDeleteArgs} args - Arguments to delete one Airports.
     * @example
     * // Delete one Airports
     * const Airports = await prisma.airports.delete({
     *   where: {
     *     // ... filter to delete one Airports
     *   }
     * })
     * 
     */
    delete<T extends airportsDeleteArgs>(args: SelectSubset<T, airportsDeleteArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airports.
     * @param {airportsUpdateArgs} args - Arguments to update one Airports.
     * @example
     * // Update one Airports
     * const airports = await prisma.airports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends airportsUpdateArgs>(args: SelectSubset<T, airportsUpdateArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airports.
     * @param {airportsDeleteManyArgs} args - Arguments to filter Airports to delete.
     * @example
     * // Delete a few Airports
     * const { count } = await prisma.airports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends airportsDeleteManyArgs>(args?: SelectSubset<T, airportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airports
     * const airports = await prisma.airports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends airportsUpdateManyArgs>(args: SelectSubset<T, airportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports and returns the data updated in the database.
     * @param {airportsUpdateManyAndReturnArgs} args - Arguments to update many Airports.
     * @example
     * // Update many Airports
     * const airports = await prisma.airports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Airports and only return the `id`
     * const airportsWithIdOnly = await prisma.airports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends airportsUpdateManyAndReturnArgs>(args: SelectSubset<T, airportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Airports.
     * @param {airportsUpsertArgs} args - Arguments to update or create a Airports.
     * @example
     * // Update or create a Airports
     * const airports = await prisma.airports.upsert({
     *   create: {
     *     // ... data to create a Airports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airports we want to update
     *   }
     * })
     */
    upsert<T extends airportsUpsertArgs>(args: SelectSubset<T, airportsUpsertArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airportsCountArgs} args - Arguments to filter Airports to count.
     * @example
     * // Count the number of Airports
     * const count = await prisma.airports.count({
     *   where: {
     *     // ... the filter for the Airports we want to count
     *   }
     * })
    **/
    count<T extends airportsCountArgs>(
      args?: Subset<T, airportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirportsAggregateArgs>(args: Subset<T, AirportsAggregateArgs>): Prisma.PrismaPromise<GetAirportsAggregateType<T>>

    /**
     * Group by Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {airportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends airportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: airportsGroupByArgs['orderBy'] }
        : { orderBy?: airportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, airportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the airports model
   */
  readonly fields: airportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for airports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__airportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routes_routes_departureToairports<T extends airports$routes_routes_departureToairportsArgs<ExtArgs> = {}>(args?: Subset<T, airports$routes_routes_departureToairportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes_routes_destinationToairports<T extends airports$routes_routes_destinationToairportsArgs<ExtArgs> = {}>(args?: Subset<T, airports$routes_routes_destinationToairportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the airports model
   */
  interface airportsFieldRefs {
    readonly id: FieldRef<"airports", 'Int'>
    readonly name: FieldRef<"airports", 'String'>
    readonly city: FieldRef<"airports", 'String'>
    readonly country: FieldRef<"airports", 'String'>
    readonly time_zone: FieldRef<"airports", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * airports findUnique
   */
  export type airportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * Filter, which airports to fetch.
     */
    where: airportsWhereUniqueInput
  }

  /**
   * airports findUniqueOrThrow
   */
  export type airportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * Filter, which airports to fetch.
     */
    where: airportsWhereUniqueInput
  }

  /**
   * airports findFirst
   */
  export type airportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * Filter, which airports to fetch.
     */
    where?: airportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airports to fetch.
     */
    orderBy?: airportsOrderByWithRelationInput | airportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for airports.
     */
    cursor?: airportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of airports.
     */
    distinct?: AirportsScalarFieldEnum | AirportsScalarFieldEnum[]
  }

  /**
   * airports findFirstOrThrow
   */
  export type airportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * Filter, which airports to fetch.
     */
    where?: airportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airports to fetch.
     */
    orderBy?: airportsOrderByWithRelationInput | airportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for airports.
     */
    cursor?: airportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of airports.
     */
    distinct?: AirportsScalarFieldEnum | AirportsScalarFieldEnum[]
  }

  /**
   * airports findMany
   */
  export type airportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * Filter, which airports to fetch.
     */
    where?: airportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of airports to fetch.
     */
    orderBy?: airportsOrderByWithRelationInput | airportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing airports.
     */
    cursor?: airportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` airports.
     */
    skip?: number
    distinct?: AirportsScalarFieldEnum | AirportsScalarFieldEnum[]
  }

  /**
   * airports create
   */
  export type airportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * The data needed to create a airports.
     */
    data: XOR<airportsCreateInput, airportsUncheckedCreateInput>
  }

  /**
   * airports createMany
   */
  export type airportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many airports.
     */
    data: airportsCreateManyInput | airportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * airports createManyAndReturn
   */
  export type airportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * The data used to create many airports.
     */
    data: airportsCreateManyInput | airportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * airports update
   */
  export type airportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * The data needed to update a airports.
     */
    data: XOR<airportsUpdateInput, airportsUncheckedUpdateInput>
    /**
     * Choose, which airports to update.
     */
    where: airportsWhereUniqueInput
  }

  /**
   * airports updateMany
   */
  export type airportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update airports.
     */
    data: XOR<airportsUpdateManyMutationInput, airportsUncheckedUpdateManyInput>
    /**
     * Filter which airports to update
     */
    where?: airportsWhereInput
    /**
     * Limit how many airports to update.
     */
    limit?: number
  }

  /**
   * airports updateManyAndReturn
   */
  export type airportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * The data used to update airports.
     */
    data: XOR<airportsUpdateManyMutationInput, airportsUncheckedUpdateManyInput>
    /**
     * Filter which airports to update
     */
    where?: airportsWhereInput
    /**
     * Limit how many airports to update.
     */
    limit?: number
  }

  /**
   * airports upsert
   */
  export type airportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * The filter to search for the airports to update in case it exists.
     */
    where: airportsWhereUniqueInput
    /**
     * In case the airports found by the `where` argument doesn't exist, create a new airports with this data.
     */
    create: XOR<airportsCreateInput, airportsUncheckedCreateInput>
    /**
     * In case the airports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<airportsUpdateInput, airportsUncheckedUpdateInput>
  }

  /**
   * airports delete
   */
  export type airportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
    /**
     * Filter which airports to delete.
     */
    where: airportsWhereUniqueInput
  }

  /**
   * airports deleteMany
   */
  export type airportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which airports to delete
     */
    where?: airportsWhereInput
    /**
     * Limit how many airports to delete.
     */
    limit?: number
  }

  /**
   * airports.routes_routes_departureToairports
   */
  export type airports$routes_routes_departureToairportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    where?: routesWhereInput
    orderBy?: routesOrderByWithRelationInput | routesOrderByWithRelationInput[]
    cursor?: routesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * airports.routes_routes_destinationToairports
   */
  export type airports$routes_routes_destinationToairportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    where?: routesWhereInput
    orderBy?: routesOrderByWithRelationInput | routesOrderByWithRelationInput[]
    cursor?: routesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * airports without action
   */
  export type airportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airports
     */
    select?: airportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airports
     */
    omit?: airportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airportsInclude<ExtArgs> | null
  }


  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    id: number | null
    seat_id: number | null
    trip_id: number | null
    extras_id: number | null
  }

  export type BookingsSumAggregateOutputType = {
    id: number | null
    seat_id: number | null
    trip_id: number | null
    extras_id: number | null
  }

  export type BookingsMinAggregateOutputType = {
    id: number | null
    ticket_code: string | null
    seat_id: number | null
    trip_id: number | null
    extras_id: number | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: number | null
    ticket_code: string | null
    seat_id: number | null
    trip_id: number | null
    extras_id: number | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    ticket_code: number
    seat_id: number
    trip_id: number
    extras_id: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    id?: true
    seat_id?: true
    trip_id?: true
    extras_id?: true
  }

  export type BookingsSumAggregateInputType = {
    id?: true
    seat_id?: true
    trip_id?: true
    extras_id?: true
  }

  export type BookingsMinAggregateInputType = {
    id?: true
    ticket_code?: true
    seat_id?: true
    trip_id?: true
    extras_id?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    ticket_code?: true
    seat_id?: true
    trip_id?: true
    extras_id?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    ticket_code?: true
    seat_id?: true
    trip_id?: true
    extras_id?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: number
    ticket_code: string | null
    seat_id: number | null
    trip_id: number | null
    extras_id: number | null
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_code?: boolean
    seat_id?: boolean
    trip_id?: boolean
    extras_id?: boolean
    extras?: boolean | bookings$extrasArgs<ExtArgs>
    seats?: boolean | bookings$seatsArgs<ExtArgs>
    tickets?: boolean | bookings$ticketsArgs<ExtArgs>
    trips?: boolean | bookings$tripsArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_code?: boolean
    seat_id?: boolean
    trip_id?: boolean
    extras_id?: boolean
    extras?: boolean | bookings$extrasArgs<ExtArgs>
    seats?: boolean | bookings$seatsArgs<ExtArgs>
    tickets?: boolean | bookings$ticketsArgs<ExtArgs>
    trips?: boolean | bookings$tripsArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_code?: boolean
    seat_id?: boolean
    trip_id?: boolean
    extras_id?: boolean
    extras?: boolean | bookings$extrasArgs<ExtArgs>
    seats?: boolean | bookings$seatsArgs<ExtArgs>
    tickets?: boolean | bookings$ticketsArgs<ExtArgs>
    trips?: boolean | bookings$tripsArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    ticket_code?: boolean
    seat_id?: boolean
    trip_id?: boolean
    extras_id?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticket_code" | "seat_id" | "trip_id" | "extras_id", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extras?: boolean | bookings$extrasArgs<ExtArgs>
    seats?: boolean | bookings$seatsArgs<ExtArgs>
    tickets?: boolean | bookings$ticketsArgs<ExtArgs>
    trips?: boolean | bookings$tripsArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extras?: boolean | bookings$extrasArgs<ExtArgs>
    seats?: boolean | bookings$seatsArgs<ExtArgs>
    tickets?: boolean | bookings$ticketsArgs<ExtArgs>
    trips?: boolean | bookings$tripsArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extras?: boolean | bookings$extrasArgs<ExtArgs>
    seats?: boolean | bookings$seatsArgs<ExtArgs>
    tickets?: boolean | bookings$ticketsArgs<ExtArgs>
    trips?: boolean | bookings$tripsArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      extras: Prisma.$extrasPayload<ExtArgs> | null
      seats: Prisma.$seatsPayload<ExtArgs> | null
      tickets: Prisma.$ticketsPayload<ExtArgs> | null
      trips: Prisma.$tripsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticket_code: string | null
      seat_id: number | null
      trip_id: number | null
      extras_id: number | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    extras<T extends bookings$extrasArgs<ExtArgs> = {}>(args?: Subset<T, bookings$extrasArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seats<T extends bookings$seatsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$seatsArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends bookings$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$ticketsArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trips<T extends bookings$tripsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$tripsArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'Int'>
    readonly ticket_code: FieldRef<"bookings", 'String'>
    readonly seat_id: FieldRef<"bookings", 'Int'>
    readonly trip_id: FieldRef<"bookings", 'Int'>
    readonly extras_id: FieldRef<"bookings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data?: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.extras
   */
  export type bookings$extrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    where?: extrasWhereInput
  }

  /**
   * bookings.seats
   */
  export type bookings$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    where?: seatsWhereInput
  }

  /**
   * bookings.tickets
   */
  export type bookings$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
  }

  /**
   * bookings.trips
   */
  export type bookings$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    where?: tripsWhereInput
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model extras
   */

  export type AggregateExtras = {
    _count: ExtrasCountAggregateOutputType | null
    _avg: ExtrasAvgAggregateOutputType | null
    _sum: ExtrasSumAggregateOutputType | null
    _min: ExtrasMinAggregateOutputType | null
    _max: ExtrasMaxAggregateOutputType | null
  }

  export type ExtrasAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ExtrasSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ExtrasMinAggregateOutputType = {
    id: number | null
    description: string | null
    price: number | null
  }

  export type ExtrasMaxAggregateOutputType = {
    id: number | null
    description: string | null
    price: number | null
  }

  export type ExtrasCountAggregateOutputType = {
    id: number
    description: number
    price: number
    _all: number
  }


  export type ExtrasAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ExtrasSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ExtrasMinAggregateInputType = {
    id?: true
    description?: true
    price?: true
  }

  export type ExtrasMaxAggregateInputType = {
    id?: true
    description?: true
    price?: true
  }

  export type ExtrasCountAggregateInputType = {
    id?: true
    description?: true
    price?: true
    _all?: true
  }

  export type ExtrasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which extras to aggregate.
     */
    where?: extrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extrasOrderByWithRelationInput | extrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: extrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned extras
    **/
    _count?: true | ExtrasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtrasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtrasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtrasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtrasMaxAggregateInputType
  }

  export type GetExtrasAggregateType<T extends ExtrasAggregateArgs> = {
        [P in keyof T & keyof AggregateExtras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtras[P]>
      : GetScalarType<T[P], AggregateExtras[P]>
  }




  export type extrasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: extrasWhereInput
    orderBy?: extrasOrderByWithAggregationInput | extrasOrderByWithAggregationInput[]
    by: ExtrasScalarFieldEnum[] | ExtrasScalarFieldEnum
    having?: extrasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtrasCountAggregateInputType | true
    _avg?: ExtrasAvgAggregateInputType
    _sum?: ExtrasSumAggregateInputType
    _min?: ExtrasMinAggregateInputType
    _max?: ExtrasMaxAggregateInputType
  }

  export type ExtrasGroupByOutputType = {
    id: number
    description: string
    price: number | null
    _count: ExtrasCountAggregateOutputType | null
    _avg: ExtrasAvgAggregateOutputType | null
    _sum: ExtrasSumAggregateOutputType | null
    _min: ExtrasMinAggregateOutputType | null
    _max: ExtrasMaxAggregateOutputType | null
  }

  type GetExtrasGroupByPayload<T extends extrasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtrasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtrasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtrasGroupByOutputType[P]>
            : GetScalarType<T[P], ExtrasGroupByOutputType[P]>
        }
      >
    >


  export type extrasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    price?: boolean
    bookings?: boolean | extras$bookingsArgs<ExtArgs>
    _count?: boolean | ExtrasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extras"]>

  export type extrasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    price?: boolean
  }, ExtArgs["result"]["extras"]>

  export type extrasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    price?: boolean
  }, ExtArgs["result"]["extras"]>

  export type extrasSelectScalar = {
    id?: boolean
    description?: boolean
    price?: boolean
  }

  export type extrasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "price", ExtArgs["result"]["extras"]>
  export type extrasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | extras$bookingsArgs<ExtArgs>
    _count?: boolean | ExtrasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type extrasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type extrasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $extrasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "extras"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      price: number | null
    }, ExtArgs["result"]["extras"]>
    composites: {}
  }

  type extrasGetPayload<S extends boolean | null | undefined | extrasDefaultArgs> = $Result.GetResult<Prisma.$extrasPayload, S>

  type extrasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<extrasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtrasCountAggregateInputType | true
    }

  export interface extrasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['extras'], meta: { name: 'extras' } }
    /**
     * Find zero or one Extras that matches the filter.
     * @param {extrasFindUniqueArgs} args - Arguments to find a Extras
     * @example
     * // Get one Extras
     * const extras = await prisma.extras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends extrasFindUniqueArgs>(args: SelectSubset<T, extrasFindUniqueArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {extrasFindUniqueOrThrowArgs} args - Arguments to find a Extras
     * @example
     * // Get one Extras
     * const extras = await prisma.extras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends extrasFindUniqueOrThrowArgs>(args: SelectSubset<T, extrasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrasFindFirstArgs} args - Arguments to find a Extras
     * @example
     * // Get one Extras
     * const extras = await prisma.extras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends extrasFindFirstArgs>(args?: SelectSubset<T, extrasFindFirstArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrasFindFirstOrThrowArgs} args - Arguments to find a Extras
     * @example
     * // Get one Extras
     * const extras = await prisma.extras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends extrasFindFirstOrThrowArgs>(args?: SelectSubset<T, extrasFindFirstOrThrowArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extras
     * const extras = await prisma.extras.findMany()
     * 
     * // Get first 10 Extras
     * const extras = await prisma.extras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extrasWithIdOnly = await prisma.extras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends extrasFindManyArgs>(args?: SelectSubset<T, extrasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extras.
     * @param {extrasCreateArgs} args - Arguments to create a Extras.
     * @example
     * // Create one Extras
     * const Extras = await prisma.extras.create({
     *   data: {
     *     // ... data to create a Extras
     *   }
     * })
     * 
     */
    create<T extends extrasCreateArgs>(args: SelectSubset<T, extrasCreateArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extras.
     * @param {extrasCreateManyArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extras = await prisma.extras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends extrasCreateManyArgs>(args?: SelectSubset<T, extrasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Extras and returns the data saved in the database.
     * @param {extrasCreateManyAndReturnArgs} args - Arguments to create many Extras.
     * @example
     * // Create many Extras
     * const extras = await prisma.extras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Extras and only return the `id`
     * const extrasWithIdOnly = await prisma.extras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends extrasCreateManyAndReturnArgs>(args?: SelectSubset<T, extrasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Extras.
     * @param {extrasDeleteArgs} args - Arguments to delete one Extras.
     * @example
     * // Delete one Extras
     * const Extras = await prisma.extras.delete({
     *   where: {
     *     // ... filter to delete one Extras
     *   }
     * })
     * 
     */
    delete<T extends extrasDeleteArgs>(args: SelectSubset<T, extrasDeleteArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extras.
     * @param {extrasUpdateArgs} args - Arguments to update one Extras.
     * @example
     * // Update one Extras
     * const extras = await prisma.extras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends extrasUpdateArgs>(args: SelectSubset<T, extrasUpdateArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extras.
     * @param {extrasDeleteManyArgs} args - Arguments to filter Extras to delete.
     * @example
     * // Delete a few Extras
     * const { count } = await prisma.extras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends extrasDeleteManyArgs>(args?: SelectSubset<T, extrasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extras
     * const extras = await prisma.extras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends extrasUpdateManyArgs>(args: SelectSubset<T, extrasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extras and returns the data updated in the database.
     * @param {extrasUpdateManyAndReturnArgs} args - Arguments to update many Extras.
     * @example
     * // Update many Extras
     * const extras = await prisma.extras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Extras and only return the `id`
     * const extrasWithIdOnly = await prisma.extras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends extrasUpdateManyAndReturnArgs>(args: SelectSubset<T, extrasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Extras.
     * @param {extrasUpsertArgs} args - Arguments to update or create a Extras.
     * @example
     * // Update or create a Extras
     * const extras = await prisma.extras.upsert({
     *   create: {
     *     // ... data to create a Extras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extras we want to update
     *   }
     * })
     */
    upsert<T extends extrasUpsertArgs>(args: SelectSubset<T, extrasUpsertArgs<ExtArgs>>): Prisma__extrasClient<$Result.GetResult<Prisma.$extrasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrasCountArgs} args - Arguments to filter Extras to count.
     * @example
     * // Count the number of Extras
     * const count = await prisma.extras.count({
     *   where: {
     *     // ... the filter for the Extras we want to count
     *   }
     * })
    **/
    count<T extends extrasCountArgs>(
      args?: Subset<T, extrasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtrasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtrasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExtrasAggregateArgs>(args: Subset<T, ExtrasAggregateArgs>): Prisma.PrismaPromise<GetExtrasAggregateType<T>>

    /**
     * Group by Extras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {extrasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends extrasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: extrasGroupByArgs['orderBy'] }
        : { orderBy?: extrasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, extrasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtrasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the extras model
   */
  readonly fields: extrasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for extras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__extrasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends extras$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, extras$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the extras model
   */
  interface extrasFieldRefs {
    readonly id: FieldRef<"extras", 'Int'>
    readonly description: FieldRef<"extras", 'String'>
    readonly price: FieldRef<"extras", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * extras findUnique
   */
  export type extrasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * Filter, which extras to fetch.
     */
    where: extrasWhereUniqueInput
  }

  /**
   * extras findUniqueOrThrow
   */
  export type extrasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * Filter, which extras to fetch.
     */
    where: extrasWhereUniqueInput
  }

  /**
   * extras findFirst
   */
  export type extrasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * Filter, which extras to fetch.
     */
    where?: extrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extrasOrderByWithRelationInput | extrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for extras.
     */
    cursor?: extrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of extras.
     */
    distinct?: ExtrasScalarFieldEnum | ExtrasScalarFieldEnum[]
  }

  /**
   * extras findFirstOrThrow
   */
  export type extrasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * Filter, which extras to fetch.
     */
    where?: extrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extrasOrderByWithRelationInput | extrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for extras.
     */
    cursor?: extrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of extras.
     */
    distinct?: ExtrasScalarFieldEnum | ExtrasScalarFieldEnum[]
  }

  /**
   * extras findMany
   */
  export type extrasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * Filter, which extras to fetch.
     */
    where?: extrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of extras to fetch.
     */
    orderBy?: extrasOrderByWithRelationInput | extrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing extras.
     */
    cursor?: extrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` extras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` extras.
     */
    skip?: number
    distinct?: ExtrasScalarFieldEnum | ExtrasScalarFieldEnum[]
  }

  /**
   * extras create
   */
  export type extrasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * The data needed to create a extras.
     */
    data: XOR<extrasCreateInput, extrasUncheckedCreateInput>
  }

  /**
   * extras createMany
   */
  export type extrasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many extras.
     */
    data: extrasCreateManyInput | extrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * extras createManyAndReturn
   */
  export type extrasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * The data used to create many extras.
     */
    data: extrasCreateManyInput | extrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * extras update
   */
  export type extrasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * The data needed to update a extras.
     */
    data: XOR<extrasUpdateInput, extrasUncheckedUpdateInput>
    /**
     * Choose, which extras to update.
     */
    where: extrasWhereUniqueInput
  }

  /**
   * extras updateMany
   */
  export type extrasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update extras.
     */
    data: XOR<extrasUpdateManyMutationInput, extrasUncheckedUpdateManyInput>
    /**
     * Filter which extras to update
     */
    where?: extrasWhereInput
    /**
     * Limit how many extras to update.
     */
    limit?: number
  }

  /**
   * extras updateManyAndReturn
   */
  export type extrasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * The data used to update extras.
     */
    data: XOR<extrasUpdateManyMutationInput, extrasUncheckedUpdateManyInput>
    /**
     * Filter which extras to update
     */
    where?: extrasWhereInput
    /**
     * Limit how many extras to update.
     */
    limit?: number
  }

  /**
   * extras upsert
   */
  export type extrasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * The filter to search for the extras to update in case it exists.
     */
    where: extrasWhereUniqueInput
    /**
     * In case the extras found by the `where` argument doesn't exist, create a new extras with this data.
     */
    create: XOR<extrasCreateInput, extrasUncheckedCreateInput>
    /**
     * In case the extras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<extrasUpdateInput, extrasUncheckedUpdateInput>
  }

  /**
   * extras delete
   */
  export type extrasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
    /**
     * Filter which extras to delete.
     */
    where: extrasWhereUniqueInput
  }

  /**
   * extras deleteMany
   */
  export type extrasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which extras to delete
     */
    where?: extrasWhereInput
    /**
     * Limit how many extras to delete.
     */
    limit?: number
  }

  /**
   * extras.bookings
   */
  export type extras$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * extras without action
   */
  export type extrasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the extras
     */
    select?: extrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the extras
     */
    omit?: extrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: extrasInclude<ExtArgs> | null
  }


  /**
   * Model flights
   */

  export type AggregateFlights = {
    _count: FlightsCountAggregateOutputType | null
    _avg: FlightsAvgAggregateOutputType | null
    _sum: FlightsSumAggregateOutputType | null
    _min: FlightsMinAggregateOutputType | null
    _max: FlightsMaxAggregateOutputType | null
  }

  export type FlightsAvgAggregateOutputType = {
    duration: number | null
    aircraft_id: number | null
    route_departure: number | null
    route_destination: number | null
  }

  export type FlightsSumAggregateOutputType = {
    duration: number | null
    aircraft_id: number | null
    route_departure: number | null
    route_destination: number | null
  }

  export type FlightsMinAggregateOutputType = {
    code: string | null
    duration: number | null
    aircraft_id: number | null
    liftoff_date: Date | null
    route_departure: number | null
    route_destination: number | null
  }

  export type FlightsMaxAggregateOutputType = {
    code: string | null
    duration: number | null
    aircraft_id: number | null
    liftoff_date: Date | null
    route_departure: number | null
    route_destination: number | null
  }

  export type FlightsCountAggregateOutputType = {
    code: number
    duration: number
    aircraft_id: number
    liftoff_date: number
    route_departure: number
    route_destination: number
    _all: number
  }


  export type FlightsAvgAggregateInputType = {
    duration?: true
    aircraft_id?: true
    route_departure?: true
    route_destination?: true
  }

  export type FlightsSumAggregateInputType = {
    duration?: true
    aircraft_id?: true
    route_departure?: true
    route_destination?: true
  }

  export type FlightsMinAggregateInputType = {
    code?: true
    duration?: true
    aircraft_id?: true
    liftoff_date?: true
    route_departure?: true
    route_destination?: true
  }

  export type FlightsMaxAggregateInputType = {
    code?: true
    duration?: true
    aircraft_id?: true
    liftoff_date?: true
    route_departure?: true
    route_destination?: true
  }

  export type FlightsCountAggregateInputType = {
    code?: true
    duration?: true
    aircraft_id?: true
    liftoff_date?: true
    route_departure?: true
    route_destination?: true
    _all?: true
  }

  export type FlightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flights to aggregate.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flights
    **/
    _count?: true | FlightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightsMaxAggregateInputType
  }

  export type GetFlightsAggregateType<T extends FlightsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlights[P]>
      : GetScalarType<T[P], AggregateFlights[P]>
  }




  export type flightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flightsWhereInput
    orderBy?: flightsOrderByWithAggregationInput | flightsOrderByWithAggregationInput[]
    by: FlightsScalarFieldEnum[] | FlightsScalarFieldEnum
    having?: flightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightsCountAggregateInputType | true
    _avg?: FlightsAvgAggregateInputType
    _sum?: FlightsSumAggregateInputType
    _min?: FlightsMinAggregateInputType
    _max?: FlightsMaxAggregateInputType
  }

  export type FlightsGroupByOutputType = {
    code: string
    duration: number | null
    aircraft_id: number | null
    liftoff_date: Date | null
    route_departure: number | null
    route_destination: number | null
    _count: FlightsCountAggregateOutputType | null
    _avg: FlightsAvgAggregateOutputType | null
    _sum: FlightsSumAggregateOutputType | null
    _min: FlightsMinAggregateOutputType | null
    _max: FlightsMaxAggregateOutputType | null
  }

  type GetFlightsGroupByPayload<T extends flightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightsGroupByOutputType[P]>
            : GetScalarType<T[P], FlightsGroupByOutputType[P]>
        }
      >
    >


  export type flightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    duration?: boolean
    aircraft_id?: boolean
    liftoff_date?: boolean
    route_departure?: boolean
    route_destination?: boolean
    aircrafts?: boolean | flights$aircraftsArgs<ExtArgs>
    routes?: boolean | flights$routesArgs<ExtArgs>
    tickets?: boolean | flights$ticketsArgs<ExtArgs>
    _count?: boolean | FlightsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flights"]>

  export type flightsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    duration?: boolean
    aircraft_id?: boolean
    liftoff_date?: boolean
    route_departure?: boolean
    route_destination?: boolean
    aircrafts?: boolean | flights$aircraftsArgs<ExtArgs>
    routes?: boolean | flights$routesArgs<ExtArgs>
  }, ExtArgs["result"]["flights"]>

  export type flightsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    duration?: boolean
    aircraft_id?: boolean
    liftoff_date?: boolean
    route_departure?: boolean
    route_destination?: boolean
    aircrafts?: boolean | flights$aircraftsArgs<ExtArgs>
    routes?: boolean | flights$routesArgs<ExtArgs>
  }, ExtArgs["result"]["flights"]>

  export type flightsSelectScalar = {
    code?: boolean
    duration?: boolean
    aircraft_id?: boolean
    liftoff_date?: boolean
    route_departure?: boolean
    route_destination?: boolean
  }

  export type flightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "duration" | "aircraft_id" | "liftoff_date" | "route_departure" | "route_destination", ExtArgs["result"]["flights"]>
  export type flightsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | flights$aircraftsArgs<ExtArgs>
    routes?: boolean | flights$routesArgs<ExtArgs>
    tickets?: boolean | flights$ticketsArgs<ExtArgs>
    _count?: boolean | FlightsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type flightsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | flights$aircraftsArgs<ExtArgs>
    routes?: boolean | flights$routesArgs<ExtArgs>
  }
  export type flightsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | flights$aircraftsArgs<ExtArgs>
    routes?: boolean | flights$routesArgs<ExtArgs>
  }

  export type $flightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flights"
    objects: {
      aircrafts: Prisma.$aircraftsPayload<ExtArgs> | null
      routes: Prisma.$routesPayload<ExtArgs> | null
      tickets: Prisma.$ticketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      duration: number | null
      aircraft_id: number | null
      liftoff_date: Date | null
      route_departure: number | null
      route_destination: number | null
    }, ExtArgs["result"]["flights"]>
    composites: {}
  }

  type flightsGetPayload<S extends boolean | null | undefined | flightsDefaultArgs> = $Result.GetResult<Prisma.$flightsPayload, S>

  type flightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightsCountAggregateInputType | true
    }

  export interface flightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flights'], meta: { name: 'flights' } }
    /**
     * Find zero or one Flights that matches the filter.
     * @param {flightsFindUniqueArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flightsFindUniqueArgs>(args: SelectSubset<T, flightsFindUniqueArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flightsFindUniqueOrThrowArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flightsFindUniqueOrThrowArgs>(args: SelectSubset<T, flightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsFindFirstArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flightsFindFirstArgs>(args?: SelectSubset<T, flightsFindFirstArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsFindFirstOrThrowArgs} args - Arguments to find a Flights
     * @example
     * // Get one Flights
     * const flights = await prisma.flights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flightsFindFirstOrThrowArgs>(args?: SelectSubset<T, flightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flights.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flights.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const flightsWithCodeOnly = await prisma.flights.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends flightsFindManyArgs>(args?: SelectSubset<T, flightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flights.
     * @param {flightsCreateArgs} args - Arguments to create a Flights.
     * @example
     * // Create one Flights
     * const Flights = await prisma.flights.create({
     *   data: {
     *     // ... data to create a Flights
     *   }
     * })
     * 
     */
    create<T extends flightsCreateArgs>(args: SelectSubset<T, flightsCreateArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flights.
     * @param {flightsCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flights = await prisma.flights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flightsCreateManyArgs>(args?: SelectSubset<T, flightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flights and returns the data saved in the database.
     * @param {flightsCreateManyAndReturnArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flights = await prisma.flights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flights and only return the `code`
     * const flightsWithCodeOnly = await prisma.flights.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends flightsCreateManyAndReturnArgs>(args?: SelectSubset<T, flightsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flights.
     * @param {flightsDeleteArgs} args - Arguments to delete one Flights.
     * @example
     * // Delete one Flights
     * const Flights = await prisma.flights.delete({
     *   where: {
     *     // ... filter to delete one Flights
     *   }
     * })
     * 
     */
    delete<T extends flightsDeleteArgs>(args: SelectSubset<T, flightsDeleteArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flights.
     * @param {flightsUpdateArgs} args - Arguments to update one Flights.
     * @example
     * // Update one Flights
     * const flights = await prisma.flights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flightsUpdateArgs>(args: SelectSubset<T, flightsUpdateArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flights.
     * @param {flightsDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flightsDeleteManyArgs>(args?: SelectSubset<T, flightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flights = await prisma.flights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flightsUpdateManyArgs>(args: SelectSubset<T, flightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights and returns the data updated in the database.
     * @param {flightsUpdateManyAndReturnArgs} args - Arguments to update many Flights.
     * @example
     * // Update many Flights
     * const flights = await prisma.flights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flights and only return the `code`
     * const flightsWithCodeOnly = await prisma.flights.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends flightsUpdateManyAndReturnArgs>(args: SelectSubset<T, flightsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flights.
     * @param {flightsUpsertArgs} args - Arguments to update or create a Flights.
     * @example
     * // Update or create a Flights
     * const flights = await prisma.flights.upsert({
     *   create: {
     *     // ... data to create a Flights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flights we want to update
     *   }
     * })
     */
    upsert<T extends flightsUpsertArgs>(args: SelectSubset<T, flightsUpsertArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flights.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends flightsCountArgs>(
      args?: Subset<T, flightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightsAggregateArgs>(args: Subset<T, FlightsAggregateArgs>): Prisma.PrismaPromise<GetFlightsAggregateType<T>>

    /**
     * Group by Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends flightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flightsGroupByArgs['orderBy'] }
        : { orderBy?: flightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, flightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flights model
   */
  readonly fields: flightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aircrafts<T extends flights$aircraftsArgs<ExtArgs> = {}>(args?: Subset<T, flights$aircraftsArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    routes<T extends flights$routesArgs<ExtArgs> = {}>(args?: Subset<T, flights$routesArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends flights$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, flights$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the flights model
   */
  interface flightsFieldRefs {
    readonly code: FieldRef<"flights", 'String'>
    readonly duration: FieldRef<"flights", 'Int'>
    readonly aircraft_id: FieldRef<"flights", 'Int'>
    readonly liftoff_date: FieldRef<"flights", 'DateTime'>
    readonly route_departure: FieldRef<"flights", 'Int'>
    readonly route_destination: FieldRef<"flights", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * flights findUnique
   */
  export type flightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights findUniqueOrThrow
   */
  export type flightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights findFirst
   */
  export type flightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flights.
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * flights findFirstOrThrow
   */
  export type flightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flights.
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flights.
     */
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * flights findMany
   */
  export type flightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter, which flights to fetch.
     */
    where?: flightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flights to fetch.
     */
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flights.
     */
    cursor?: flightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flights.
     */
    skip?: number
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * flights create
   */
  export type flightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * The data needed to create a flights.
     */
    data?: XOR<flightsCreateInput, flightsUncheckedCreateInput>
  }

  /**
   * flights createMany
   */
  export type flightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flights.
     */
    data: flightsCreateManyInput | flightsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flights createManyAndReturn
   */
  export type flightsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * The data used to create many flights.
     */
    data: flightsCreateManyInput | flightsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * flights update
   */
  export type flightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * The data needed to update a flights.
     */
    data: XOR<flightsUpdateInput, flightsUncheckedUpdateInput>
    /**
     * Choose, which flights to update.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights updateMany
   */
  export type flightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flights.
     */
    data: XOR<flightsUpdateManyMutationInput, flightsUncheckedUpdateManyInput>
    /**
     * Filter which flights to update
     */
    where?: flightsWhereInput
    /**
     * Limit how many flights to update.
     */
    limit?: number
  }

  /**
   * flights updateManyAndReturn
   */
  export type flightsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * The data used to update flights.
     */
    data: XOR<flightsUpdateManyMutationInput, flightsUncheckedUpdateManyInput>
    /**
     * Filter which flights to update
     */
    where?: flightsWhereInput
    /**
     * Limit how many flights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * flights upsert
   */
  export type flightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * The filter to search for the flights to update in case it exists.
     */
    where: flightsWhereUniqueInput
    /**
     * In case the flights found by the `where` argument doesn't exist, create a new flights with this data.
     */
    create: XOR<flightsCreateInput, flightsUncheckedCreateInput>
    /**
     * In case the flights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flightsUpdateInput, flightsUncheckedUpdateInput>
  }

  /**
   * flights delete
   */
  export type flightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    /**
     * Filter which flights to delete.
     */
    where: flightsWhereUniqueInput
  }

  /**
   * flights deleteMany
   */
  export type flightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flights to delete
     */
    where?: flightsWhereInput
    /**
     * Limit how many flights to delete.
     */
    limit?: number
  }

  /**
   * flights.aircrafts
   */
  export type flights$aircraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    where?: aircraftsWhereInput
  }

  /**
   * flights.routes
   */
  export type flights$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    where?: routesWhereInput
  }

  /**
   * flights.tickets
   */
  export type flights$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    cursor?: ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * flights without action
   */
  export type flightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
  }


  /**
   * Model routes
   */

  export type AggregateRoutes = {
    _count: RoutesCountAggregateOutputType | null
    _avg: RoutesAvgAggregateOutputType | null
    _sum: RoutesSumAggregateOutputType | null
    _min: RoutesMinAggregateOutputType | null
    _max: RoutesMaxAggregateOutputType | null
  }

  export type RoutesAvgAggregateOutputType = {
    departure: number | null
    destination: number | null
  }

  export type RoutesSumAggregateOutputType = {
    departure: number | null
    destination: number | null
  }

  export type RoutesMinAggregateOutputType = {
    departure: number | null
    destination: number | null
  }

  export type RoutesMaxAggregateOutputType = {
    departure: number | null
    destination: number | null
  }

  export type RoutesCountAggregateOutputType = {
    departure: number
    destination: number
    _all: number
  }


  export type RoutesAvgAggregateInputType = {
    departure?: true
    destination?: true
  }

  export type RoutesSumAggregateInputType = {
    departure?: true
    destination?: true
  }

  export type RoutesMinAggregateInputType = {
    departure?: true
    destination?: true
  }

  export type RoutesMaxAggregateInputType = {
    departure?: true
    destination?: true
  }

  export type RoutesCountAggregateInputType = {
    departure?: true
    destination?: true
    _all?: true
  }

  export type RoutesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which routes to aggregate.
     */
    where?: routesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routes to fetch.
     */
    orderBy?: routesOrderByWithRelationInput | routesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: routesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned routes
    **/
    _count?: true | RoutesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutesMaxAggregateInputType
  }

  export type GetRoutesAggregateType<T extends RoutesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutes[P]>
      : GetScalarType<T[P], AggregateRoutes[P]>
  }




  export type routesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: routesWhereInput
    orderBy?: routesOrderByWithAggregationInput | routesOrderByWithAggregationInput[]
    by: RoutesScalarFieldEnum[] | RoutesScalarFieldEnum
    having?: routesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutesCountAggregateInputType | true
    _avg?: RoutesAvgAggregateInputType
    _sum?: RoutesSumAggregateInputType
    _min?: RoutesMinAggregateInputType
    _max?: RoutesMaxAggregateInputType
  }

  export type RoutesGroupByOutputType = {
    departure: number
    destination: number
    _count: RoutesCountAggregateOutputType | null
    _avg: RoutesAvgAggregateOutputType | null
    _sum: RoutesSumAggregateOutputType | null
    _min: RoutesMinAggregateOutputType | null
    _max: RoutesMaxAggregateOutputType | null
  }

  type GetRoutesGroupByPayload<T extends routesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutesGroupByOutputType[P]>
            : GetScalarType<T[P], RoutesGroupByOutputType[P]>
        }
      >
    >


  export type routesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departure?: boolean
    destination?: boolean
    flights?: boolean | routes$flightsArgs<ExtArgs>
    airports_routes_departureToairports?: boolean | airportsDefaultArgs<ExtArgs>
    airports_routes_destinationToairports?: boolean | airportsDefaultArgs<ExtArgs>
    uses?: boolean | routes$usesArgs<ExtArgs>
    _count?: boolean | RoutesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routes"]>

  export type routesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departure?: boolean
    destination?: boolean
    airports_routes_departureToairports?: boolean | airportsDefaultArgs<ExtArgs>
    airports_routes_destinationToairports?: boolean | airportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routes"]>

  export type routesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departure?: boolean
    destination?: boolean
    airports_routes_departureToairports?: boolean | airportsDefaultArgs<ExtArgs>
    airports_routes_destinationToairports?: boolean | airportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routes"]>

  export type routesSelectScalar = {
    departure?: boolean
    destination?: boolean
  }

  export type routesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departure" | "destination", ExtArgs["result"]["routes"]>
  export type routesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | routes$flightsArgs<ExtArgs>
    airports_routes_departureToairports?: boolean | airportsDefaultArgs<ExtArgs>
    airports_routes_destinationToairports?: boolean | airportsDefaultArgs<ExtArgs>
    uses?: boolean | routes$usesArgs<ExtArgs>
    _count?: boolean | RoutesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type routesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airports_routes_departureToairports?: boolean | airportsDefaultArgs<ExtArgs>
    airports_routes_destinationToairports?: boolean | airportsDefaultArgs<ExtArgs>
  }
  export type routesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airports_routes_departureToairports?: boolean | airportsDefaultArgs<ExtArgs>
    airports_routes_destinationToairports?: boolean | airportsDefaultArgs<ExtArgs>
  }

  export type $routesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "routes"
    objects: {
      flights: Prisma.$flightsPayload<ExtArgs>[]
      airports_routes_departureToairports: Prisma.$airportsPayload<ExtArgs>
      airports_routes_destinationToairports: Prisma.$airportsPayload<ExtArgs>
      uses: Prisma.$usesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      departure: number
      destination: number
    }, ExtArgs["result"]["routes"]>
    composites: {}
  }

  type routesGetPayload<S extends boolean | null | undefined | routesDefaultArgs> = $Result.GetResult<Prisma.$routesPayload, S>

  type routesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<routesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutesCountAggregateInputType | true
    }

  export interface routesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['routes'], meta: { name: 'routes' } }
    /**
     * Find zero or one Routes that matches the filter.
     * @param {routesFindUniqueArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends routesFindUniqueArgs>(args: SelectSubset<T, routesFindUniqueArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {routesFindUniqueOrThrowArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends routesFindUniqueOrThrowArgs>(args: SelectSubset<T, routesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routesFindFirstArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends routesFindFirstArgs>(args?: SelectSubset<T, routesFindFirstArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routesFindFirstOrThrowArgs} args - Arguments to find a Routes
     * @example
     * // Get one Routes
     * const routes = await prisma.routes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends routesFindFirstOrThrowArgs>(args?: SelectSubset<T, routesFindFirstOrThrowArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.routes.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.routes.findMany({ take: 10 })
     * 
     * // Only select the `departure`
     * const routesWithDepartureOnly = await prisma.routes.findMany({ select: { departure: true } })
     * 
     */
    findMany<T extends routesFindManyArgs>(args?: SelectSubset<T, routesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routes.
     * @param {routesCreateArgs} args - Arguments to create a Routes.
     * @example
     * // Create one Routes
     * const Routes = await prisma.routes.create({
     *   data: {
     *     // ... data to create a Routes
     *   }
     * })
     * 
     */
    create<T extends routesCreateArgs>(args: SelectSubset<T, routesCreateArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {routesCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const routes = await prisma.routes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends routesCreateManyArgs>(args?: SelectSubset<T, routesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {routesCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const routes = await prisma.routes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `departure`
     * const routesWithDepartureOnly = await prisma.routes.createManyAndReturn({
     *   select: { departure: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends routesCreateManyAndReturnArgs>(args?: SelectSubset<T, routesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routes.
     * @param {routesDeleteArgs} args - Arguments to delete one Routes.
     * @example
     * // Delete one Routes
     * const Routes = await prisma.routes.delete({
     *   where: {
     *     // ... filter to delete one Routes
     *   }
     * })
     * 
     */
    delete<T extends routesDeleteArgs>(args: SelectSubset<T, routesDeleteArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routes.
     * @param {routesUpdateArgs} args - Arguments to update one Routes.
     * @example
     * // Update one Routes
     * const routes = await prisma.routes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends routesUpdateArgs>(args: SelectSubset<T, routesUpdateArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {routesDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.routes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends routesDeleteManyArgs>(args?: SelectSubset<T, routesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const routes = await prisma.routes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends routesUpdateManyArgs>(args: SelectSubset<T, routesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {routesUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const routes = await prisma.routes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `departure`
     * const routesWithDepartureOnly = await prisma.routes.updateManyAndReturn({
     *   select: { departure: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends routesUpdateManyAndReturnArgs>(args: SelectSubset<T, routesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routes.
     * @param {routesUpsertArgs} args - Arguments to update or create a Routes.
     * @example
     * // Update or create a Routes
     * const routes = await prisma.routes.upsert({
     *   create: {
     *     // ... data to create a Routes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routes we want to update
     *   }
     * })
     */
    upsert<T extends routesUpsertArgs>(args: SelectSubset<T, routesUpsertArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routesCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.routes.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends routesCountArgs>(
      args?: Subset<T, routesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutesAggregateArgs>(args: Subset<T, RoutesAggregateArgs>): Prisma.PrismaPromise<GetRoutesAggregateType<T>>

    /**
     * Group by Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends routesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: routesGroupByArgs['orderBy'] }
        : { orderBy?: routesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, routesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the routes model
   */
  readonly fields: routesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for routes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__routesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flights<T extends routes$flightsArgs<ExtArgs> = {}>(args?: Subset<T, routes$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    airports_routes_departureToairports<T extends airportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, airportsDefaultArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    airports_routes_destinationToairports<T extends airportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, airportsDefaultArgs<ExtArgs>>): Prisma__airportsClient<$Result.GetResult<Prisma.$airportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uses<T extends routes$usesArgs<ExtArgs> = {}>(args?: Subset<T, routes$usesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the routes model
   */
  interface routesFieldRefs {
    readonly departure: FieldRef<"routes", 'Int'>
    readonly destination: FieldRef<"routes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * routes findUnique
   */
  export type routesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * Filter, which routes to fetch.
     */
    where: routesWhereUniqueInput
  }

  /**
   * routes findUniqueOrThrow
   */
  export type routesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * Filter, which routes to fetch.
     */
    where: routesWhereUniqueInput
  }

  /**
   * routes findFirst
   */
  export type routesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * Filter, which routes to fetch.
     */
    where?: routesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routes to fetch.
     */
    orderBy?: routesOrderByWithRelationInput | routesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for routes.
     */
    cursor?: routesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of routes.
     */
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * routes findFirstOrThrow
   */
  export type routesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * Filter, which routes to fetch.
     */
    where?: routesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routes to fetch.
     */
    orderBy?: routesOrderByWithRelationInput | routesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for routes.
     */
    cursor?: routesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of routes.
     */
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * routes findMany
   */
  export type routesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * Filter, which routes to fetch.
     */
    where?: routesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routes to fetch.
     */
    orderBy?: routesOrderByWithRelationInput | routesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing routes.
     */
    cursor?: routesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routes.
     */
    skip?: number
    distinct?: RoutesScalarFieldEnum | RoutesScalarFieldEnum[]
  }

  /**
   * routes create
   */
  export type routesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * The data needed to create a routes.
     */
    data: XOR<routesCreateInput, routesUncheckedCreateInput>
  }

  /**
   * routes createMany
   */
  export type routesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many routes.
     */
    data: routesCreateManyInput | routesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * routes createManyAndReturn
   */
  export type routesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * The data used to create many routes.
     */
    data: routesCreateManyInput | routesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * routes update
   */
  export type routesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * The data needed to update a routes.
     */
    data: XOR<routesUpdateInput, routesUncheckedUpdateInput>
    /**
     * Choose, which routes to update.
     */
    where: routesWhereUniqueInput
  }

  /**
   * routes updateMany
   */
  export type routesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update routes.
     */
    data: XOR<routesUpdateManyMutationInput, routesUncheckedUpdateManyInput>
    /**
     * Filter which routes to update
     */
    where?: routesWhereInput
    /**
     * Limit how many routes to update.
     */
    limit?: number
  }

  /**
   * routes updateManyAndReturn
   */
  export type routesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * The data used to update routes.
     */
    data: XOR<routesUpdateManyMutationInput, routesUncheckedUpdateManyInput>
    /**
     * Filter which routes to update
     */
    where?: routesWhereInput
    /**
     * Limit how many routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * routes upsert
   */
  export type routesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * The filter to search for the routes to update in case it exists.
     */
    where: routesWhereUniqueInput
    /**
     * In case the routes found by the `where` argument doesn't exist, create a new routes with this data.
     */
    create: XOR<routesCreateInput, routesUncheckedCreateInput>
    /**
     * In case the routes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<routesUpdateInput, routesUncheckedUpdateInput>
  }

  /**
   * routes delete
   */
  export type routesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    /**
     * Filter which routes to delete.
     */
    where: routesWhereUniqueInput
  }

  /**
   * routes deleteMany
   */
  export type routesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which routes to delete
     */
    where?: routesWhereInput
    /**
     * Limit how many routes to delete.
     */
    limit?: number
  }

  /**
   * routes.flights
   */
  export type routes$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    where?: flightsWhereInput
    orderBy?: flightsOrderByWithRelationInput | flightsOrderByWithRelationInput[]
    cursor?: flightsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightsScalarFieldEnum | FlightsScalarFieldEnum[]
  }

  /**
   * routes.uses
   */
  export type routes$usesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    where?: usesWhereInput
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    cursor?: usesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * routes without action
   */
  export type routesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
  }


  /**
   * Model seats
   */

  export type AggregateSeats = {
    _count: SeatsCountAggregateOutputType | null
    _avg: SeatsAvgAggregateOutputType | null
    _sum: SeatsSumAggregateOutputType | null
    _min: SeatsMinAggregateOutputType | null
    _max: SeatsMaxAggregateOutputType | null
  }

  export type SeatsAvgAggregateOutputType = {
    id: number | null
    aircraft_id: number | null
  }

  export type SeatsSumAggregateOutputType = {
    id: number | null
    aircraft_id: number | null
  }

  export type SeatsMinAggregateOutputType = {
    id: number | null
    postion: string | null
    aircraft_id: number | null
  }

  export type SeatsMaxAggregateOutputType = {
    id: number | null
    postion: string | null
    aircraft_id: number | null
  }

  export type SeatsCountAggregateOutputType = {
    id: number
    postion: number
    aircraft_id: number
    _all: number
  }


  export type SeatsAvgAggregateInputType = {
    id?: true
    aircraft_id?: true
  }

  export type SeatsSumAggregateInputType = {
    id?: true
    aircraft_id?: true
  }

  export type SeatsMinAggregateInputType = {
    id?: true
    postion?: true
    aircraft_id?: true
  }

  export type SeatsMaxAggregateInputType = {
    id?: true
    postion?: true
    aircraft_id?: true
  }

  export type SeatsCountAggregateInputType = {
    id?: true
    postion?: true
    aircraft_id?: true
    _all?: true
  }

  export type SeatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seats to aggregate.
     */
    where?: seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatsOrderByWithRelationInput | seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seats
    **/
    _count?: true | SeatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatsMaxAggregateInputType
  }

  export type GetSeatsAggregateType<T extends SeatsAggregateArgs> = {
        [P in keyof T & keyof AggregateSeats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeats[P]>
      : GetScalarType<T[P], AggregateSeats[P]>
  }




  export type seatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seatsWhereInput
    orderBy?: seatsOrderByWithAggregationInput | seatsOrderByWithAggregationInput[]
    by: SeatsScalarFieldEnum[] | SeatsScalarFieldEnum
    having?: seatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatsCountAggregateInputType | true
    _avg?: SeatsAvgAggregateInputType
    _sum?: SeatsSumAggregateInputType
    _min?: SeatsMinAggregateInputType
    _max?: SeatsMaxAggregateInputType
  }

  export type SeatsGroupByOutputType = {
    id: number
    postion: string | null
    aircraft_id: number | null
    _count: SeatsCountAggregateOutputType | null
    _avg: SeatsAvgAggregateOutputType | null
    _sum: SeatsSumAggregateOutputType | null
    _min: SeatsMinAggregateOutputType | null
    _max: SeatsMaxAggregateOutputType | null
  }

  type GetSeatsGroupByPayload<T extends seatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatsGroupByOutputType[P]>
            : GetScalarType<T[P], SeatsGroupByOutputType[P]>
        }
      >
    >


  export type seatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postion?: boolean
    aircraft_id?: boolean
    bookings?: boolean | seats$bookingsArgs<ExtArgs>
    aircrafts?: boolean | seats$aircraftsArgs<ExtArgs>
    _count?: boolean | SeatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seats"]>

  export type seatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postion?: boolean
    aircraft_id?: boolean
    aircrafts?: boolean | seats$aircraftsArgs<ExtArgs>
  }, ExtArgs["result"]["seats"]>

  export type seatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postion?: boolean
    aircraft_id?: boolean
    aircrafts?: boolean | seats$aircraftsArgs<ExtArgs>
  }, ExtArgs["result"]["seats"]>

  export type seatsSelectScalar = {
    id?: boolean
    postion?: boolean
    aircraft_id?: boolean
  }

  export type seatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postion" | "aircraft_id", ExtArgs["result"]["seats"]>
  export type seatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | seats$bookingsArgs<ExtArgs>
    aircrafts?: boolean | seats$aircraftsArgs<ExtArgs>
    _count?: boolean | SeatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type seatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | seats$aircraftsArgs<ExtArgs>
  }
  export type seatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aircrafts?: boolean | seats$aircraftsArgs<ExtArgs>
  }

  export type $seatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seats"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      aircrafts: Prisma.$aircraftsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postion: string | null
      aircraft_id: number | null
    }, ExtArgs["result"]["seats"]>
    composites: {}
  }

  type seatsGetPayload<S extends boolean | null | undefined | seatsDefaultArgs> = $Result.GetResult<Prisma.$seatsPayload, S>

  type seatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatsCountAggregateInputType | true
    }

  export interface seatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seats'], meta: { name: 'seats' } }
    /**
     * Find zero or one Seats that matches the filter.
     * @param {seatsFindUniqueArgs} args - Arguments to find a Seats
     * @example
     * // Get one Seats
     * const seats = await prisma.seats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seatsFindUniqueArgs>(args: SelectSubset<T, seatsFindUniqueArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seatsFindUniqueOrThrowArgs} args - Arguments to find a Seats
     * @example
     * // Get one Seats
     * const seats = await prisma.seats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seatsFindUniqueOrThrowArgs>(args: SelectSubset<T, seatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatsFindFirstArgs} args - Arguments to find a Seats
     * @example
     * // Get one Seats
     * const seats = await prisma.seats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seatsFindFirstArgs>(args?: SelectSubset<T, seatsFindFirstArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatsFindFirstOrThrowArgs} args - Arguments to find a Seats
     * @example
     * // Get one Seats
     * const seats = await prisma.seats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seatsFindFirstOrThrowArgs>(args?: SelectSubset<T, seatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seats.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatsWithIdOnly = await prisma.seats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seatsFindManyArgs>(args?: SelectSubset<T, seatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seats.
     * @param {seatsCreateArgs} args - Arguments to create a Seats.
     * @example
     * // Create one Seats
     * const Seats = await prisma.seats.create({
     *   data: {
     *     // ... data to create a Seats
     *   }
     * })
     * 
     */
    create<T extends seatsCreateArgs>(args: SelectSubset<T, seatsCreateArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {seatsCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seats = await prisma.seats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seatsCreateManyArgs>(args?: SelectSubset<T, seatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seats and returns the data saved in the database.
     * @param {seatsCreateManyAndReturnArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seats = await prisma.seats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seats and only return the `id`
     * const seatsWithIdOnly = await prisma.seats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seatsCreateManyAndReturnArgs>(args?: SelectSubset<T, seatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seats.
     * @param {seatsDeleteArgs} args - Arguments to delete one Seats.
     * @example
     * // Delete one Seats
     * const Seats = await prisma.seats.delete({
     *   where: {
     *     // ... filter to delete one Seats
     *   }
     * })
     * 
     */
    delete<T extends seatsDeleteArgs>(args: SelectSubset<T, seatsDeleteArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seats.
     * @param {seatsUpdateArgs} args - Arguments to update one Seats.
     * @example
     * // Update one Seats
     * const seats = await prisma.seats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seatsUpdateArgs>(args: SelectSubset<T, seatsUpdateArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {seatsDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seatsDeleteManyArgs>(args?: SelectSubset<T, seatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seats = await prisma.seats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seatsUpdateManyArgs>(args: SelectSubset<T, seatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats and returns the data updated in the database.
     * @param {seatsUpdateManyAndReturnArgs} args - Arguments to update many Seats.
     * @example
     * // Update many Seats
     * const seats = await prisma.seats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seats and only return the `id`
     * const seatsWithIdOnly = await prisma.seats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends seatsUpdateManyAndReturnArgs>(args: SelectSubset<T, seatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seats.
     * @param {seatsUpsertArgs} args - Arguments to update or create a Seats.
     * @example
     * // Update or create a Seats
     * const seats = await prisma.seats.upsert({
     *   create: {
     *     // ... data to create a Seats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seats we want to update
     *   }
     * })
     */
    upsert<T extends seatsUpsertArgs>(args: SelectSubset<T, seatsUpsertArgs<ExtArgs>>): Prisma__seatsClient<$Result.GetResult<Prisma.$seatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatsCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seats.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends seatsCountArgs>(
      args?: Subset<T, seatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatsAggregateArgs>(args: Subset<T, SeatsAggregateArgs>): Prisma.PrismaPromise<GetSeatsAggregateType<T>>

    /**
     * Group by Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seatsGroupByArgs['orderBy'] }
        : { orderBy?: seatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seats model
   */
  readonly fields: seatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends seats$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, seats$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aircrafts<T extends seats$aircraftsArgs<ExtArgs> = {}>(args?: Subset<T, seats$aircraftsArgs<ExtArgs>>): Prisma__aircraftsClient<$Result.GetResult<Prisma.$aircraftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the seats model
   */
  interface seatsFieldRefs {
    readonly id: FieldRef<"seats", 'Int'>
    readonly postion: FieldRef<"seats", 'String'>
    readonly aircraft_id: FieldRef<"seats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * seats findUnique
   */
  export type seatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where: seatsWhereUniqueInput
  }

  /**
   * seats findUniqueOrThrow
   */
  export type seatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where: seatsWhereUniqueInput
  }

  /**
   * seats findFirst
   */
  export type seatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where?: seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatsOrderByWithRelationInput | seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seats.
     */
    cursor?: seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seats.
     */
    distinct?: SeatsScalarFieldEnum | SeatsScalarFieldEnum[]
  }

  /**
   * seats findFirstOrThrow
   */
  export type seatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where?: seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatsOrderByWithRelationInput | seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seats.
     */
    cursor?: seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seats.
     */
    distinct?: SeatsScalarFieldEnum | SeatsScalarFieldEnum[]
  }

  /**
   * seats findMany
   */
  export type seatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where?: seatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatsOrderByWithRelationInput | seatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seats.
     */
    cursor?: seatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    distinct?: SeatsScalarFieldEnum | SeatsScalarFieldEnum[]
  }

  /**
   * seats create
   */
  export type seatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * The data needed to create a seats.
     */
    data?: XOR<seatsCreateInput, seatsUncheckedCreateInput>
  }

  /**
   * seats createMany
   */
  export type seatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seats.
     */
    data: seatsCreateManyInput | seatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seats createManyAndReturn
   */
  export type seatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * The data used to create many seats.
     */
    data: seatsCreateManyInput | seatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * seats update
   */
  export type seatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * The data needed to update a seats.
     */
    data: XOR<seatsUpdateInput, seatsUncheckedUpdateInput>
    /**
     * Choose, which seats to update.
     */
    where: seatsWhereUniqueInput
  }

  /**
   * seats updateMany
   */
  export type seatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seats.
     */
    data: XOR<seatsUpdateManyMutationInput, seatsUncheckedUpdateManyInput>
    /**
     * Filter which seats to update
     */
    where?: seatsWhereInput
    /**
     * Limit how many seats to update.
     */
    limit?: number
  }

  /**
   * seats updateManyAndReturn
   */
  export type seatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * The data used to update seats.
     */
    data: XOR<seatsUpdateManyMutationInput, seatsUncheckedUpdateManyInput>
    /**
     * Filter which seats to update
     */
    where?: seatsWhereInput
    /**
     * Limit how many seats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * seats upsert
   */
  export type seatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * The filter to search for the seats to update in case it exists.
     */
    where: seatsWhereUniqueInput
    /**
     * In case the seats found by the `where` argument doesn't exist, create a new seats with this data.
     */
    create: XOR<seatsCreateInput, seatsUncheckedCreateInput>
    /**
     * In case the seats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seatsUpdateInput, seatsUncheckedUpdateInput>
  }

  /**
   * seats delete
   */
  export type seatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
    /**
     * Filter which seats to delete.
     */
    where: seatsWhereUniqueInput
  }

  /**
   * seats deleteMany
   */
  export type seatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seats to delete
     */
    where?: seatsWhereInput
    /**
     * Limit how many seats to delete.
     */
    limit?: number
  }

  /**
   * seats.bookings
   */
  export type seats$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * seats.aircrafts
   */
  export type seats$aircraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aircrafts
     */
    select?: aircraftsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aircrafts
     */
    omit?: aircraftsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aircraftsInclude<ExtArgs> | null
    where?: aircraftsWhereInput
  }

  /**
   * seats without action
   */
  export type seatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seats
     */
    select?: seatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seats
     */
    omit?: seatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatsInclude<ExtArgs> | null
  }


  /**
   * Model tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    price: number | null
  }

  export type TicketsSumAggregateOutputType = {
    price: number | null
  }

  export type TicketsMinAggregateOutputType = {
    code: string | null
    type: string | null
    price: number | null
    fligt_code: string | null
  }

  export type TicketsMaxAggregateOutputType = {
    code: string | null
    type: string | null
    price: number | null
    fligt_code: string | null
  }

  export type TicketsCountAggregateOutputType = {
    code: number
    type: number
    price: number
    fligt_code: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    price?: true
  }

  export type TicketsSumAggregateInputType = {
    price?: true
  }

  export type TicketsMinAggregateInputType = {
    code?: true
    type?: true
    price?: true
    fligt_code?: true
  }

  export type TicketsMaxAggregateInputType = {
    code?: true
    type?: true
    price?: true
    fligt_code?: true
  }

  export type TicketsCountAggregateInputType = {
    code?: true
    type?: true
    price?: true
    fligt_code?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to aggregate.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketsWhereInput
    orderBy?: ticketsOrderByWithAggregationInput | ticketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    code: string
    type: string | null
    price: number | null
    fligt_code: string | null
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    type?: boolean
    price?: boolean
    fligt_code?: boolean
    bookings?: boolean | tickets$bookingsArgs<ExtArgs>
    flights?: boolean | tickets$flightsArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    type?: boolean
    price?: boolean
    fligt_code?: boolean
    flights?: boolean | tickets$flightsArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    type?: boolean
    price?: boolean
    fligt_code?: boolean
    flights?: boolean | tickets$flightsArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type ticketsSelectScalar = {
    code?: boolean
    type?: boolean
    price?: boolean
    fligt_code?: boolean
  }

  export type ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "type" | "price" | "fligt_code", ExtArgs["result"]["tickets"]>
  export type ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | tickets$bookingsArgs<ExtArgs>
    flights?: boolean | tickets$flightsArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ticketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | tickets$flightsArgs<ExtArgs>
  }
  export type ticketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | tickets$flightsArgs<ExtArgs>
  }

  export type $ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tickets"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      flights: Prisma.$flightsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      type: string | null
      price: number | null
      fligt_code: string | null
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = $Result.GetResult<Prisma.$ticketsPayload, S>

  type ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tickets'], meta: { name: 'tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {ticketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketsFindUniqueArgs>(args: SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketsFindFirstArgs>(args?: SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const ticketsWithCodeOnly = await prisma.tickets.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ticketsFindManyArgs>(args?: SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {ticketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends ticketsCreateArgs>(args: SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketsCreateManyArgs>(args?: SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {ticketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `code`
     * const ticketsWithCodeOnly = await prisma.tickets.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ticketsCreateManyAndReturnArgs>(args?: SelectSubset<T, ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {ticketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends ticketsDeleteArgs>(args: SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {ticketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketsUpdateArgs>(args: SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketsDeleteManyArgs>(args?: SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketsUpdateManyArgs>(args: SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {ticketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `code`
     * const ticketsWithCodeOnly = await prisma.tickets.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ticketsUpdateManyAndReturnArgs>(args: SelectSubset<T, ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {ticketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends ticketsUpsertArgs>(args: SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma__ticketsClient<$Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketsCountArgs>(
      args?: Subset<T, ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketsGroupByArgs['orderBy'] }
        : { orderBy?: ticketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tickets model
   */
  readonly fields: ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends tickets$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, tickets$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flights<T extends tickets$flightsArgs<ExtArgs> = {}>(args?: Subset<T, tickets$flightsArgs<ExtArgs>>): Prisma__flightsClient<$Result.GetResult<Prisma.$flightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tickets model
   */
  interface ticketsFieldRefs {
    readonly code: FieldRef<"tickets", 'String'>
    readonly type: FieldRef<"tickets", 'String'>
    readonly price: FieldRef<"tickets", 'Float'>
    readonly fligt_code: FieldRef<"tickets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tickets findUnique
   */
  export type ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findUniqueOrThrow
   */
  export type ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets findFirst
   */
  export type ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findFirstOrThrow
   */
  export type ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets findMany
   */
  export type ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketsOrderByWithRelationInput | ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * tickets create
   */
  export type ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a tickets.
     */
    data: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
  }

  /**
   * tickets createMany
   */
  export type ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tickets createManyAndReturn
   */
  export type ticketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to create many tickets.
     */
    data: ticketsCreateManyInput | ticketsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tickets update
   */
  export type ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a tickets.
     */
    data: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
    /**
     * Choose, which tickets to update.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets updateMany
   */
  export type ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * tickets updateManyAndReturn
   */
  export type ticketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tickets upsert
   */
  export type ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the tickets to update in case it exists.
     */
    where: ticketsWhereUniqueInput
    /**
     * In case the tickets found by the `where` argument doesn't exist, create a new tickets with this data.
     */
    create: XOR<ticketsCreateInput, ticketsUncheckedCreateInput>
    /**
     * In case the tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketsUpdateInput, ticketsUncheckedUpdateInput>
  }

  /**
   * tickets delete
   */
  export type ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
    /**
     * Filter which tickets to delete.
     */
    where: ticketsWhereUniqueInput
  }

  /**
   * tickets deleteMany
   */
  export type ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketsWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * tickets.bookings
   */
  export type tickets$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * tickets.flights
   */
  export type tickets$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flights
     */
    select?: flightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flights
     */
    omit?: flightsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: flightsInclude<ExtArgs> | null
    where?: flightsWhereInput
  }

  /**
   * tickets without action
   */
  export type ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tickets
     */
    select?: ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tickets
     */
    omit?: ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketsInclude<ExtArgs> | null
  }


  /**
   * Model trips
   */

  export type AggregateTrips = {
    _count: TripsCountAggregateOutputType | null
    _avg: TripsAvgAggregateOutputType | null
    _sum: TripsSumAggregateOutputType | null
    _min: TripsMinAggregateOutputType | null
    _max: TripsMaxAggregateOutputType | null
  }

  export type TripsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TripsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TripsMinAggregateOutputType = {
    id: number | null
    creation_date: Date | null
    user_id: number | null
  }

  export type TripsMaxAggregateOutputType = {
    id: number | null
    creation_date: Date | null
    user_id: number | null
  }

  export type TripsCountAggregateOutputType = {
    id: number
    creation_date: number
    user_id: number
    _all: number
  }


  export type TripsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TripsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TripsMinAggregateInputType = {
    id?: true
    creation_date?: true
    user_id?: true
  }

  export type TripsMaxAggregateInputType = {
    id?: true
    creation_date?: true
    user_id?: true
  }

  export type TripsCountAggregateInputType = {
    id?: true
    creation_date?: true
    user_id?: true
    _all?: true
  }

  export type TripsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips to aggregate.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trips
    **/
    _count?: true | TripsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripsMaxAggregateInputType
  }

  export type GetTripsAggregateType<T extends TripsAggregateArgs> = {
        [P in keyof T & keyof AggregateTrips]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrips[P]>
      : GetScalarType<T[P], AggregateTrips[P]>
  }




  export type tripsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripsWhereInput
    orderBy?: tripsOrderByWithAggregationInput | tripsOrderByWithAggregationInput[]
    by: TripsScalarFieldEnum[] | TripsScalarFieldEnum
    having?: tripsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripsCountAggregateInputType | true
    _avg?: TripsAvgAggregateInputType
    _sum?: TripsSumAggregateInputType
    _min?: TripsMinAggregateInputType
    _max?: TripsMaxAggregateInputType
  }

  export type TripsGroupByOutputType = {
    id: number
    creation_date: Date | null
    user_id: number | null
    _count: TripsCountAggregateOutputType | null
    _avg: TripsAvgAggregateOutputType | null
    _sum: TripsSumAggregateOutputType | null
    _min: TripsMinAggregateOutputType | null
    _max: TripsMaxAggregateOutputType | null
  }

  type GetTripsGroupByPayload<T extends tripsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripsGroupByOutputType[P]>
            : GetScalarType<T[P], TripsGroupByOutputType[P]>
        }
      >
    >


  export type tripsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creation_date?: boolean
    user_id?: boolean
    bookings?: boolean | trips$bookingsArgs<ExtArgs>
    users?: boolean | trips$usersArgs<ExtArgs>
    _count?: boolean | TripsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trips"]>

  export type tripsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creation_date?: boolean
    user_id?: boolean
    users?: boolean | trips$usersArgs<ExtArgs>
  }, ExtArgs["result"]["trips"]>

  export type tripsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creation_date?: boolean
    user_id?: boolean
    users?: boolean | trips$usersArgs<ExtArgs>
  }, ExtArgs["result"]["trips"]>

  export type tripsSelectScalar = {
    id?: boolean
    creation_date?: boolean
    user_id?: boolean
  }

  export type tripsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creation_date" | "user_id", ExtArgs["result"]["trips"]>
  export type tripsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | trips$bookingsArgs<ExtArgs>
    users?: boolean | trips$usersArgs<ExtArgs>
    _count?: boolean | TripsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tripsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | trips$usersArgs<ExtArgs>
  }
  export type tripsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | trips$usersArgs<ExtArgs>
  }

  export type $tripsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trips"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creation_date: Date | null
      user_id: number | null
    }, ExtArgs["result"]["trips"]>
    composites: {}
  }

  type tripsGetPayload<S extends boolean | null | undefined | tripsDefaultArgs> = $Result.GetResult<Prisma.$tripsPayload, S>

  type tripsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tripsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripsCountAggregateInputType | true
    }

  export interface tripsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trips'], meta: { name: 'trips' } }
    /**
     * Find zero or one Trips that matches the filter.
     * @param {tripsFindUniqueArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tripsFindUniqueArgs>(args: SelectSubset<T, tripsFindUniqueArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trips that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tripsFindUniqueOrThrowArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tripsFindUniqueOrThrowArgs>(args: SelectSubset<T, tripsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsFindFirstArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tripsFindFirstArgs>(args?: SelectSubset<T, tripsFindFirstArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trips that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsFindFirstOrThrowArgs} args - Arguments to find a Trips
     * @example
     * // Get one Trips
     * const trips = await prisma.trips.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tripsFindFirstOrThrowArgs>(args?: SelectSubset<T, tripsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trips.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trips.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripsWithIdOnly = await prisma.trips.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tripsFindManyArgs>(args?: SelectSubset<T, tripsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trips.
     * @param {tripsCreateArgs} args - Arguments to create a Trips.
     * @example
     * // Create one Trips
     * const Trips = await prisma.trips.create({
     *   data: {
     *     // ... data to create a Trips
     *   }
     * })
     * 
     */
    create<T extends tripsCreateArgs>(args: SelectSubset<T, tripsCreateArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {tripsCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trips = await prisma.trips.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tripsCreateManyArgs>(args?: SelectSubset<T, tripsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {tripsCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trips = await prisma.trips.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripsWithIdOnly = await prisma.trips.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tripsCreateManyAndReturnArgs>(args?: SelectSubset<T, tripsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trips.
     * @param {tripsDeleteArgs} args - Arguments to delete one Trips.
     * @example
     * // Delete one Trips
     * const Trips = await prisma.trips.delete({
     *   where: {
     *     // ... filter to delete one Trips
     *   }
     * })
     * 
     */
    delete<T extends tripsDeleteArgs>(args: SelectSubset<T, tripsDeleteArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trips.
     * @param {tripsUpdateArgs} args - Arguments to update one Trips.
     * @example
     * // Update one Trips
     * const trips = await prisma.trips.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tripsUpdateArgs>(args: SelectSubset<T, tripsUpdateArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {tripsDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trips.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tripsDeleteManyArgs>(args?: SelectSubset<T, tripsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trips = await prisma.trips.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tripsUpdateManyArgs>(args: SelectSubset<T, tripsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {tripsUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trips = await prisma.trips.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripsWithIdOnly = await prisma.trips.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tripsUpdateManyAndReturnArgs>(args: SelectSubset<T, tripsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trips.
     * @param {tripsUpsertArgs} args - Arguments to update or create a Trips.
     * @example
     * // Update or create a Trips
     * const trips = await prisma.trips.upsert({
     *   create: {
     *     // ... data to create a Trips
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trips we want to update
     *   }
     * })
     */
    upsert<T extends tripsUpsertArgs>(args: SelectSubset<T, tripsUpsertArgs<ExtArgs>>): Prisma__tripsClient<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trips.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends tripsCountArgs>(
      args?: Subset<T, tripsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripsAggregateArgs>(args: Subset<T, TripsAggregateArgs>): Prisma.PrismaPromise<GetTripsAggregateType<T>>

    /**
     * Group by Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tripsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tripsGroupByArgs['orderBy'] }
        : { orderBy?: tripsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tripsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trips model
   */
  readonly fields: tripsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trips.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tripsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends trips$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, trips$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends trips$usersArgs<ExtArgs> = {}>(args?: Subset<T, trips$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trips model
   */
  interface tripsFieldRefs {
    readonly id: FieldRef<"trips", 'Int'>
    readonly creation_date: FieldRef<"trips", 'DateTime'>
    readonly user_id: FieldRef<"trips", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * trips findUnique
   */
  export type tripsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips findUniqueOrThrow
   */
  export type tripsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips findFirst
   */
  export type tripsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * trips findFirstOrThrow
   */
  export type tripsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * trips findMany
   */
  export type tripsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trips.
     */
    cursor?: tripsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * trips create
   */
  export type tripsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * The data needed to create a trips.
     */
    data?: XOR<tripsCreateInput, tripsUncheckedCreateInput>
  }

  /**
   * trips createMany
   */
  export type tripsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trips.
     */
    data: tripsCreateManyInput | tripsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trips createManyAndReturn
   */
  export type tripsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * The data used to create many trips.
     */
    data: tripsCreateManyInput | tripsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * trips update
   */
  export type tripsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * The data needed to update a trips.
     */
    data: XOR<tripsUpdateInput, tripsUncheckedUpdateInput>
    /**
     * Choose, which trips to update.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips updateMany
   */
  export type tripsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trips.
     */
    data: XOR<tripsUpdateManyMutationInput, tripsUncheckedUpdateManyInput>
    /**
     * Filter which trips to update
     */
    where?: tripsWhereInput
    /**
     * Limit how many trips to update.
     */
    limit?: number
  }

  /**
   * trips updateManyAndReturn
   */
  export type tripsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * The data used to update trips.
     */
    data: XOR<tripsUpdateManyMutationInput, tripsUncheckedUpdateManyInput>
    /**
     * Filter which trips to update
     */
    where?: tripsWhereInput
    /**
     * Limit how many trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * trips upsert
   */
  export type tripsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * The filter to search for the trips to update in case it exists.
     */
    where: tripsWhereUniqueInput
    /**
     * In case the trips found by the `where` argument doesn't exist, create a new trips with this data.
     */
    create: XOR<tripsCreateInput, tripsUncheckedCreateInput>
    /**
     * In case the trips was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tripsUpdateInput, tripsUncheckedUpdateInput>
  }

  /**
   * trips delete
   */
  export type tripsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    /**
     * Filter which trips to delete.
     */
    where: tripsWhereUniqueInput
  }

  /**
   * trips deleteMany
   */
  export type tripsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips to delete
     */
    where?: tripsWhereInput
    /**
     * Limit how many trips to delete.
     */
    limit?: number
  }

  /**
   * trips.bookings
   */
  export type trips$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * trips.users
   */
  export type trips$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * trips without action
   */
  export type tripsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    trips?: boolean | users$tripsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | users$tripsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      trips: Prisma.$tripsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends users$tripsArgs<ExtArgs> = {}>(args?: Subset<T, users$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.trips
   */
  export type users$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trips
     */
    select?: tripsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trips
     */
    omit?: tripsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripsInclude<ExtArgs> | null
    where?: tripsWhereInput
    orderBy?: tripsOrderByWithRelationInput | tripsOrderByWithRelationInput[]
    cursor?: tripsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripsScalarFieldEnum | TripsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model uses
   */

  export type AggregateUses = {
    _count: UsesCountAggregateOutputType | null
    _avg: UsesAvgAggregateOutputType | null
    _sum: UsesSumAggregateOutputType | null
    _min: UsesMinAggregateOutputType | null
    _max: UsesMaxAggregateOutputType | null
  }

  export type UsesAvgAggregateOutputType = {
    id: number | null
    route_departure: number | null
    route_destination: number | null
  }

  export type UsesSumAggregateOutputType = {
    id: number | null
    route_departure: number | null
    route_destination: number | null
  }

  export type UsesMinAggregateOutputType = {
    id: number | null
    airline_name: string | null
    route_departure: number | null
    route_destination: number | null
  }

  export type UsesMaxAggregateOutputType = {
    id: number | null
    airline_name: string | null
    route_departure: number | null
    route_destination: number | null
  }

  export type UsesCountAggregateOutputType = {
    id: number
    airline_name: number
    route_departure: number
    route_destination: number
    _all: number
  }


  export type UsesAvgAggregateInputType = {
    id?: true
    route_departure?: true
    route_destination?: true
  }

  export type UsesSumAggregateInputType = {
    id?: true
    route_departure?: true
    route_destination?: true
  }

  export type UsesMinAggregateInputType = {
    id?: true
    airline_name?: true
    route_departure?: true
    route_destination?: true
  }

  export type UsesMaxAggregateInputType = {
    id?: true
    airline_name?: true
    route_departure?: true
    route_destination?: true
  }

  export type UsesCountAggregateInputType = {
    id?: true
    airline_name?: true
    route_departure?: true
    route_destination?: true
    _all?: true
  }

  export type UsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uses to aggregate.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uses
    **/
    _count?: true | UsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsesMaxAggregateInputType
  }

  export type GetUsesAggregateType<T extends UsesAggregateArgs> = {
        [P in keyof T & keyof AggregateUses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUses[P]>
      : GetScalarType<T[P], AggregateUses[P]>
  }




  export type usesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usesWhereInput
    orderBy?: usesOrderByWithAggregationInput | usesOrderByWithAggregationInput[]
    by: UsesScalarFieldEnum[] | UsesScalarFieldEnum
    having?: usesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsesCountAggregateInputType | true
    _avg?: UsesAvgAggregateInputType
    _sum?: UsesSumAggregateInputType
    _min?: UsesMinAggregateInputType
    _max?: UsesMaxAggregateInputType
  }

  export type UsesGroupByOutputType = {
    id: number
    airline_name: string | null
    route_departure: number | null
    route_destination: number | null
    _count: UsesCountAggregateOutputType | null
    _avg: UsesAvgAggregateOutputType | null
    _sum: UsesSumAggregateOutputType | null
    _min: UsesMinAggregateOutputType | null
    _max: UsesMaxAggregateOutputType | null
  }

  type GetUsesGroupByPayload<T extends usesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsesGroupByOutputType[P]>
            : GetScalarType<T[P], UsesGroupByOutputType[P]>
        }
      >
    >


  export type usesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airline_name?: boolean
    route_departure?: boolean
    route_destination?: boolean
    airlines?: boolean | uses$airlinesArgs<ExtArgs>
    routes?: boolean | uses$routesArgs<ExtArgs>
  }, ExtArgs["result"]["uses"]>

  export type usesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airline_name?: boolean
    route_departure?: boolean
    route_destination?: boolean
    airlines?: boolean | uses$airlinesArgs<ExtArgs>
    routes?: boolean | uses$routesArgs<ExtArgs>
  }, ExtArgs["result"]["uses"]>

  export type usesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airline_name?: boolean
    route_departure?: boolean
    route_destination?: boolean
    airlines?: boolean | uses$airlinesArgs<ExtArgs>
    routes?: boolean | uses$routesArgs<ExtArgs>
  }, ExtArgs["result"]["uses"]>

  export type usesSelectScalar = {
    id?: boolean
    airline_name?: boolean
    route_departure?: boolean
    route_destination?: boolean
  }

  export type usesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "airline_name" | "route_departure" | "route_destination", ExtArgs["result"]["uses"]>
  export type usesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | uses$airlinesArgs<ExtArgs>
    routes?: boolean | uses$routesArgs<ExtArgs>
  }
  export type usesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | uses$airlinesArgs<ExtArgs>
    routes?: boolean | uses$routesArgs<ExtArgs>
  }
  export type usesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | uses$airlinesArgs<ExtArgs>
    routes?: boolean | uses$routesArgs<ExtArgs>
  }

  export type $usesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uses"
    objects: {
      airlines: Prisma.$airlinesPayload<ExtArgs> | null
      routes: Prisma.$routesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      airline_name: string | null
      route_departure: number | null
      route_destination: number | null
    }, ExtArgs["result"]["uses"]>
    composites: {}
  }

  type usesGetPayload<S extends boolean | null | undefined | usesDefaultArgs> = $Result.GetResult<Prisma.$usesPayload, S>

  type usesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsesCountAggregateInputType | true
    }

  export interface usesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uses'], meta: { name: 'uses' } }
    /**
     * Find zero or one Uses that matches the filter.
     * @param {usesFindUniqueArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usesFindUniqueArgs>(args: SelectSubset<T, usesFindUniqueArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usesFindUniqueOrThrowArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usesFindUniqueOrThrowArgs>(args: SelectSubset<T, usesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesFindFirstArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usesFindFirstArgs>(args?: SelectSubset<T, usesFindFirstArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesFindFirstOrThrowArgs} args - Arguments to find a Uses
     * @example
     * // Get one Uses
     * const uses = await prisma.uses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usesFindFirstOrThrowArgs>(args?: SelectSubset<T, usesFindFirstOrThrowArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uses
     * const uses = await prisma.uses.findMany()
     * 
     * // Get first 10 Uses
     * const uses = await prisma.uses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usesWithIdOnly = await prisma.uses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usesFindManyArgs>(args?: SelectSubset<T, usesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uses.
     * @param {usesCreateArgs} args - Arguments to create a Uses.
     * @example
     * // Create one Uses
     * const Uses = await prisma.uses.create({
     *   data: {
     *     // ... data to create a Uses
     *   }
     * })
     * 
     */
    create<T extends usesCreateArgs>(args: SelectSubset<T, usesCreateArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uses.
     * @param {usesCreateManyArgs} args - Arguments to create many Uses.
     * @example
     * // Create many Uses
     * const uses = await prisma.uses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usesCreateManyArgs>(args?: SelectSubset<T, usesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Uses and returns the data saved in the database.
     * @param {usesCreateManyAndReturnArgs} args - Arguments to create many Uses.
     * @example
     * // Create many Uses
     * const uses = await prisma.uses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Uses and only return the `id`
     * const usesWithIdOnly = await prisma.uses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usesCreateManyAndReturnArgs>(args?: SelectSubset<T, usesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Uses.
     * @param {usesDeleteArgs} args - Arguments to delete one Uses.
     * @example
     * // Delete one Uses
     * const Uses = await prisma.uses.delete({
     *   where: {
     *     // ... filter to delete one Uses
     *   }
     * })
     * 
     */
    delete<T extends usesDeleteArgs>(args: SelectSubset<T, usesDeleteArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uses.
     * @param {usesUpdateArgs} args - Arguments to update one Uses.
     * @example
     * // Update one Uses
     * const uses = await prisma.uses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usesUpdateArgs>(args: SelectSubset<T, usesUpdateArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uses.
     * @param {usesDeleteManyArgs} args - Arguments to filter Uses to delete.
     * @example
     * // Delete a few Uses
     * const { count } = await prisma.uses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usesDeleteManyArgs>(args?: SelectSubset<T, usesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uses
     * const uses = await prisma.uses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usesUpdateManyArgs>(args: SelectSubset<T, usesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uses and returns the data updated in the database.
     * @param {usesUpdateManyAndReturnArgs} args - Arguments to update many Uses.
     * @example
     * // Update many Uses
     * const uses = await prisma.uses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Uses and only return the `id`
     * const usesWithIdOnly = await prisma.uses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usesUpdateManyAndReturnArgs>(args: SelectSubset<T, usesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Uses.
     * @param {usesUpsertArgs} args - Arguments to update or create a Uses.
     * @example
     * // Update or create a Uses
     * const uses = await prisma.uses.upsert({
     *   create: {
     *     // ... data to create a Uses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uses we want to update
     *   }
     * })
     */
    upsert<T extends usesUpsertArgs>(args: SelectSubset<T, usesUpsertArgs<ExtArgs>>): Prisma__usesClient<$Result.GetResult<Prisma.$usesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesCountArgs} args - Arguments to filter Uses to count.
     * @example
     * // Count the number of Uses
     * const count = await prisma.uses.count({
     *   where: {
     *     // ... the filter for the Uses we want to count
     *   }
     * })
    **/
    count<T extends usesCountArgs>(
      args?: Subset<T, usesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsesAggregateArgs>(args: Subset<T, UsesAggregateArgs>): Prisma.PrismaPromise<GetUsesAggregateType<T>>

    /**
     * Group by Uses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usesGroupByArgs['orderBy'] }
        : { orderBy?: usesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uses model
   */
  readonly fields: usesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airlines<T extends uses$airlinesArgs<ExtArgs> = {}>(args?: Subset<T, uses$airlinesArgs<ExtArgs>>): Prisma__airlinesClient<$Result.GetResult<Prisma.$airlinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    routes<T extends uses$routesArgs<ExtArgs> = {}>(args?: Subset<T, uses$routesArgs<ExtArgs>>): Prisma__routesClient<$Result.GetResult<Prisma.$routesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the uses model
   */
  interface usesFieldRefs {
    readonly id: FieldRef<"uses", 'Int'>
    readonly airline_name: FieldRef<"uses", 'String'>
    readonly route_departure: FieldRef<"uses", 'Int'>
    readonly route_destination: FieldRef<"uses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * uses findUnique
   */
  export type usesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses findUniqueOrThrow
   */
  export type usesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses findFirst
   */
  export type usesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uses.
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uses.
     */
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * uses findFirstOrThrow
   */
  export type usesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uses.
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uses.
     */
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * uses findMany
   */
  export type usesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter, which uses to fetch.
     */
    where?: usesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uses to fetch.
     */
    orderBy?: usesOrderByWithRelationInput | usesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uses.
     */
    cursor?: usesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uses.
     */
    skip?: number
    distinct?: UsesScalarFieldEnum | UsesScalarFieldEnum[]
  }

  /**
   * uses create
   */
  export type usesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * The data needed to create a uses.
     */
    data?: XOR<usesCreateInput, usesUncheckedCreateInput>
  }

  /**
   * uses createMany
   */
  export type usesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uses.
     */
    data: usesCreateManyInput | usesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uses createManyAndReturn
   */
  export type usesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * The data used to create many uses.
     */
    data: usesCreateManyInput | usesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * uses update
   */
  export type usesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * The data needed to update a uses.
     */
    data: XOR<usesUpdateInput, usesUncheckedUpdateInput>
    /**
     * Choose, which uses to update.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses updateMany
   */
  export type usesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uses.
     */
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyInput>
    /**
     * Filter which uses to update
     */
    where?: usesWhereInput
    /**
     * Limit how many uses to update.
     */
    limit?: number
  }

  /**
   * uses updateManyAndReturn
   */
  export type usesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * The data used to update uses.
     */
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyInput>
    /**
     * Filter which uses to update
     */
    where?: usesWhereInput
    /**
     * Limit how many uses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * uses upsert
   */
  export type usesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * The filter to search for the uses to update in case it exists.
     */
    where: usesWhereUniqueInput
    /**
     * In case the uses found by the `where` argument doesn't exist, create a new uses with this data.
     */
    create: XOR<usesCreateInput, usesUncheckedCreateInput>
    /**
     * In case the uses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usesUpdateInput, usesUncheckedUpdateInput>
  }

  /**
   * uses delete
   */
  export type usesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
    /**
     * Filter which uses to delete.
     */
    where: usesWhereUniqueInput
  }

  /**
   * uses deleteMany
   */
  export type usesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uses to delete
     */
    where?: usesWhereInput
    /**
     * Limit how many uses to delete.
     */
    limit?: number
  }

  /**
   * uses.airlines
   */
  export type uses$airlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the airlines
     */
    select?: airlinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the airlines
     */
    omit?: airlinesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: airlinesInclude<ExtArgs> | null
    where?: airlinesWhereInput
  }

  /**
   * uses.routes
   */
  export type uses$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routes
     */
    select?: routesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routes
     */
    omit?: routesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routesInclude<ExtArgs> | null
    where?: routesWhereInput
  }

  /**
   * uses without action
   */
  export type usesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uses
     */
    select?: usesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uses
     */
    omit?: usesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AircraftsScalarFieldEnum: {
    id: 'id',
    model: 'model',
    seats_capacity: 'seats_capacity',
    owner_name: 'owner_name'
  };

  export type AircraftsScalarFieldEnum = (typeof AircraftsScalarFieldEnum)[keyof typeof AircraftsScalarFieldEnum]


  export const AirlinesScalarFieldEnum: {
    name: 'name',
    password: 'password',
    country: 'country',
    motto: 'motto'
  };

  export type AirlinesScalarFieldEnum = (typeof AirlinesScalarFieldEnum)[keyof typeof AirlinesScalarFieldEnum]


  export const AirportsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    country: 'country',
    time_zone: 'time_zone'
  };

  export type AirportsScalarFieldEnum = (typeof AirportsScalarFieldEnum)[keyof typeof AirportsScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    id: 'id',
    ticket_code: 'ticket_code',
    seat_id: 'seat_id',
    trip_id: 'trip_id',
    extras_id: 'extras_id'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const ExtrasScalarFieldEnum: {
    id: 'id',
    description: 'description',
    price: 'price'
  };

  export type ExtrasScalarFieldEnum = (typeof ExtrasScalarFieldEnum)[keyof typeof ExtrasScalarFieldEnum]


  export const FlightsScalarFieldEnum: {
    code: 'code',
    duration: 'duration',
    aircraft_id: 'aircraft_id',
    liftoff_date: 'liftoff_date',
    route_departure: 'route_departure',
    route_destination: 'route_destination'
  };

  export type FlightsScalarFieldEnum = (typeof FlightsScalarFieldEnum)[keyof typeof FlightsScalarFieldEnum]


  export const RoutesScalarFieldEnum: {
    departure: 'departure',
    destination: 'destination'
  };

  export type RoutesScalarFieldEnum = (typeof RoutesScalarFieldEnum)[keyof typeof RoutesScalarFieldEnum]


  export const SeatsScalarFieldEnum: {
    id: 'id',
    postion: 'postion',
    aircraft_id: 'aircraft_id'
  };

  export type SeatsScalarFieldEnum = (typeof SeatsScalarFieldEnum)[keyof typeof SeatsScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    code: 'code',
    type: 'type',
    price: 'price',
    fligt_code: 'fligt_code'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const TripsScalarFieldEnum: {
    id: 'id',
    creation_date: 'creation_date',
    user_id: 'user_id'
  };

  export type TripsScalarFieldEnum = (typeof TripsScalarFieldEnum)[keyof typeof TripsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsesScalarFieldEnum: {
    id: 'id',
    airline_name: 'airline_name',
    route_departure: 'route_departure',
    route_destination: 'route_destination'
  };

  export type UsesScalarFieldEnum = (typeof UsesScalarFieldEnum)[keyof typeof UsesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type aircraftsWhereInput = {
    AND?: aircraftsWhereInput | aircraftsWhereInput[]
    OR?: aircraftsWhereInput[]
    NOT?: aircraftsWhereInput | aircraftsWhereInput[]
    id?: IntFilter<"aircrafts"> | number
    model?: StringNullableFilter<"aircrafts"> | string | null
    seats_capacity?: IntNullableFilter<"aircrafts"> | number | null
    owner_name?: StringFilter<"aircrafts"> | string
    airlines?: XOR<AirlinesScalarRelationFilter, airlinesWhereInput>
    flights?: FlightsListRelationFilter
    seats?: SeatsListRelationFilter
  }

  export type aircraftsOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrderInput | SortOrder
    seats_capacity?: SortOrderInput | SortOrder
    owner_name?: SortOrder
    airlines?: airlinesOrderByWithRelationInput
    flights?: flightsOrderByRelationAggregateInput
    seats?: seatsOrderByRelationAggregateInput
  }

  export type aircraftsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: aircraftsWhereInput | aircraftsWhereInput[]
    OR?: aircraftsWhereInput[]
    NOT?: aircraftsWhereInput | aircraftsWhereInput[]
    model?: StringNullableFilter<"aircrafts"> | string | null
    seats_capacity?: IntNullableFilter<"aircrafts"> | number | null
    owner_name?: StringFilter<"aircrafts"> | string
    airlines?: XOR<AirlinesScalarRelationFilter, airlinesWhereInput>
    flights?: FlightsListRelationFilter
    seats?: SeatsListRelationFilter
  }, "id">

  export type aircraftsOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrderInput | SortOrder
    seats_capacity?: SortOrderInput | SortOrder
    owner_name?: SortOrder
    _count?: aircraftsCountOrderByAggregateInput
    _avg?: aircraftsAvgOrderByAggregateInput
    _max?: aircraftsMaxOrderByAggregateInput
    _min?: aircraftsMinOrderByAggregateInput
    _sum?: aircraftsSumOrderByAggregateInput
  }

  export type aircraftsScalarWhereWithAggregatesInput = {
    AND?: aircraftsScalarWhereWithAggregatesInput | aircraftsScalarWhereWithAggregatesInput[]
    OR?: aircraftsScalarWhereWithAggregatesInput[]
    NOT?: aircraftsScalarWhereWithAggregatesInput | aircraftsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"aircrafts"> | number
    model?: StringNullableWithAggregatesFilter<"aircrafts"> | string | null
    seats_capacity?: IntNullableWithAggregatesFilter<"aircrafts"> | number | null
    owner_name?: StringWithAggregatesFilter<"aircrafts"> | string
  }

  export type airlinesWhereInput = {
    AND?: airlinesWhereInput | airlinesWhereInput[]
    OR?: airlinesWhereInput[]
    NOT?: airlinesWhereInput | airlinesWhereInput[]
    name?: StringFilter<"airlines"> | string
    password?: StringFilter<"airlines"> | string
    country?: StringFilter<"airlines"> | string
    motto?: StringNullableFilter<"airlines"> | string | null
    aircrafts?: AircraftsListRelationFilter
    uses?: UsesListRelationFilter
  }

  export type airlinesOrderByWithRelationInput = {
    name?: SortOrder
    password?: SortOrder
    country?: SortOrder
    motto?: SortOrderInput | SortOrder
    aircrafts?: aircraftsOrderByRelationAggregateInput
    uses?: usesOrderByRelationAggregateInput
  }

  export type airlinesWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: airlinesWhereInput | airlinesWhereInput[]
    OR?: airlinesWhereInput[]
    NOT?: airlinesWhereInput | airlinesWhereInput[]
    password?: StringFilter<"airlines"> | string
    country?: StringFilter<"airlines"> | string
    motto?: StringNullableFilter<"airlines"> | string | null
    aircrafts?: AircraftsListRelationFilter
    uses?: UsesListRelationFilter
  }, "name">

  export type airlinesOrderByWithAggregationInput = {
    name?: SortOrder
    password?: SortOrder
    country?: SortOrder
    motto?: SortOrderInput | SortOrder
    _count?: airlinesCountOrderByAggregateInput
    _max?: airlinesMaxOrderByAggregateInput
    _min?: airlinesMinOrderByAggregateInput
  }

  export type airlinesScalarWhereWithAggregatesInput = {
    AND?: airlinesScalarWhereWithAggregatesInput | airlinesScalarWhereWithAggregatesInput[]
    OR?: airlinesScalarWhereWithAggregatesInput[]
    NOT?: airlinesScalarWhereWithAggregatesInput | airlinesScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"airlines"> | string
    password?: StringWithAggregatesFilter<"airlines"> | string
    country?: StringWithAggregatesFilter<"airlines"> | string
    motto?: StringNullableWithAggregatesFilter<"airlines"> | string | null
  }

  export type airportsWhereInput = {
    AND?: airportsWhereInput | airportsWhereInput[]
    OR?: airportsWhereInput[]
    NOT?: airportsWhereInput | airportsWhereInput[]
    id?: IntFilter<"airports"> | number
    name?: StringFilter<"airports"> | string
    city?: StringFilter<"airports"> | string
    country?: StringFilter<"airports"> | string
    time_zone?: IntFilter<"airports"> | number
    routes_routes_departureToairports?: RoutesListRelationFilter
    routes_routes_destinationToairports?: RoutesListRelationFilter
  }

  export type airportsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    time_zone?: SortOrder
    routes_routes_departureToairports?: routesOrderByRelationAggregateInput
    routes_routes_destinationToairports?: routesOrderByRelationAggregateInput
  }

  export type airportsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: airportsWhereInput | airportsWhereInput[]
    OR?: airportsWhereInput[]
    NOT?: airportsWhereInput | airportsWhereInput[]
    name?: StringFilter<"airports"> | string
    city?: StringFilter<"airports"> | string
    country?: StringFilter<"airports"> | string
    time_zone?: IntFilter<"airports"> | number
    routes_routes_departureToairports?: RoutesListRelationFilter
    routes_routes_destinationToairports?: RoutesListRelationFilter
  }, "id">

  export type airportsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    time_zone?: SortOrder
    _count?: airportsCountOrderByAggregateInput
    _avg?: airportsAvgOrderByAggregateInput
    _max?: airportsMaxOrderByAggregateInput
    _min?: airportsMinOrderByAggregateInput
    _sum?: airportsSumOrderByAggregateInput
  }

  export type airportsScalarWhereWithAggregatesInput = {
    AND?: airportsScalarWhereWithAggregatesInput | airportsScalarWhereWithAggregatesInput[]
    OR?: airportsScalarWhereWithAggregatesInput[]
    NOT?: airportsScalarWhereWithAggregatesInput | airportsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"airports"> | number
    name?: StringWithAggregatesFilter<"airports"> | string
    city?: StringWithAggregatesFilter<"airports"> | string
    country?: StringWithAggregatesFilter<"airports"> | string
    time_zone?: IntWithAggregatesFilter<"airports"> | number
  }

  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: IntFilter<"bookings"> | number
    ticket_code?: StringNullableFilter<"bookings"> | string | null
    seat_id?: IntNullableFilter<"bookings"> | number | null
    trip_id?: IntNullableFilter<"bookings"> | number | null
    extras_id?: IntNullableFilter<"bookings"> | number | null
    extras?: XOR<ExtrasNullableScalarRelationFilter, extrasWhereInput> | null
    seats?: XOR<SeatsNullableScalarRelationFilter, seatsWhereInput> | null
    tickets?: XOR<TicketsNullableScalarRelationFilter, ticketsWhereInput> | null
    trips?: XOR<TripsNullableScalarRelationFilter, tripsWhereInput> | null
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    ticket_code?: SortOrderInput | SortOrder
    seat_id?: SortOrderInput | SortOrder
    trip_id?: SortOrderInput | SortOrder
    extras_id?: SortOrderInput | SortOrder
    extras?: extrasOrderByWithRelationInput
    seats?: seatsOrderByWithRelationInput
    tickets?: ticketsOrderByWithRelationInput
    trips?: tripsOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    ticket_code?: StringNullableFilter<"bookings"> | string | null
    seat_id?: IntNullableFilter<"bookings"> | number | null
    trip_id?: IntNullableFilter<"bookings"> | number | null
    extras_id?: IntNullableFilter<"bookings"> | number | null
    extras?: XOR<ExtrasNullableScalarRelationFilter, extrasWhereInput> | null
    seats?: XOR<SeatsNullableScalarRelationFilter, seatsWhereInput> | null
    tickets?: XOR<TicketsNullableScalarRelationFilter, ticketsWhereInput> | null
    trips?: XOR<TripsNullableScalarRelationFilter, tripsWhereInput> | null
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    ticket_code?: SortOrderInput | SortOrder
    seat_id?: SortOrderInput | SortOrder
    trip_id?: SortOrderInput | SortOrder
    extras_id?: SortOrderInput | SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bookings"> | number
    ticket_code?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    seat_id?: IntNullableWithAggregatesFilter<"bookings"> | number | null
    trip_id?: IntNullableWithAggregatesFilter<"bookings"> | number | null
    extras_id?: IntNullableWithAggregatesFilter<"bookings"> | number | null
  }

  export type extrasWhereInput = {
    AND?: extrasWhereInput | extrasWhereInput[]
    OR?: extrasWhereInput[]
    NOT?: extrasWhereInput | extrasWhereInput[]
    id?: IntFilter<"extras"> | number
    description?: StringFilter<"extras"> | string
    price?: FloatNullableFilter<"extras"> | number | null
    bookings?: BookingsListRelationFilter
  }

  export type extrasOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    price?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
  }

  export type extrasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: extrasWhereInput | extrasWhereInput[]
    OR?: extrasWhereInput[]
    NOT?: extrasWhereInput | extrasWhereInput[]
    description?: StringFilter<"extras"> | string
    price?: FloatNullableFilter<"extras"> | number | null
    bookings?: BookingsListRelationFilter
  }, "id">

  export type extrasOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    price?: SortOrderInput | SortOrder
    _count?: extrasCountOrderByAggregateInput
    _avg?: extrasAvgOrderByAggregateInput
    _max?: extrasMaxOrderByAggregateInput
    _min?: extrasMinOrderByAggregateInput
    _sum?: extrasSumOrderByAggregateInput
  }

  export type extrasScalarWhereWithAggregatesInput = {
    AND?: extrasScalarWhereWithAggregatesInput | extrasScalarWhereWithAggregatesInput[]
    OR?: extrasScalarWhereWithAggregatesInput[]
    NOT?: extrasScalarWhereWithAggregatesInput | extrasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"extras"> | number
    description?: StringWithAggregatesFilter<"extras"> | string
    price?: FloatNullableWithAggregatesFilter<"extras"> | number | null
  }

  export type flightsWhereInput = {
    AND?: flightsWhereInput | flightsWhereInput[]
    OR?: flightsWhereInput[]
    NOT?: flightsWhereInput | flightsWhereInput[]
    code?: UuidFilter<"flights"> | string
    duration?: IntNullableFilter<"flights"> | number | null
    aircraft_id?: IntNullableFilter<"flights"> | number | null
    liftoff_date?: DateTimeNullableFilter<"flights"> | Date | string | null
    route_departure?: IntNullableFilter<"flights"> | number | null
    route_destination?: IntNullableFilter<"flights"> | number | null
    aircrafts?: XOR<AircraftsNullableScalarRelationFilter, aircraftsWhereInput> | null
    routes?: XOR<RoutesNullableScalarRelationFilter, routesWhereInput> | null
    tickets?: TicketsListRelationFilter
  }

  export type flightsOrderByWithRelationInput = {
    code?: SortOrder
    duration?: SortOrderInput | SortOrder
    aircraft_id?: SortOrderInput | SortOrder
    liftoff_date?: SortOrderInput | SortOrder
    route_departure?: SortOrderInput | SortOrder
    route_destination?: SortOrderInput | SortOrder
    aircrafts?: aircraftsOrderByWithRelationInput
    routes?: routesOrderByWithRelationInput
    tickets?: ticketsOrderByRelationAggregateInput
  }

  export type flightsWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: flightsWhereInput | flightsWhereInput[]
    OR?: flightsWhereInput[]
    NOT?: flightsWhereInput | flightsWhereInput[]
    duration?: IntNullableFilter<"flights"> | number | null
    aircraft_id?: IntNullableFilter<"flights"> | number | null
    liftoff_date?: DateTimeNullableFilter<"flights"> | Date | string | null
    route_departure?: IntNullableFilter<"flights"> | number | null
    route_destination?: IntNullableFilter<"flights"> | number | null
    aircrafts?: XOR<AircraftsNullableScalarRelationFilter, aircraftsWhereInput> | null
    routes?: XOR<RoutesNullableScalarRelationFilter, routesWhereInput> | null
    tickets?: TicketsListRelationFilter
  }, "code">

  export type flightsOrderByWithAggregationInput = {
    code?: SortOrder
    duration?: SortOrderInput | SortOrder
    aircraft_id?: SortOrderInput | SortOrder
    liftoff_date?: SortOrderInput | SortOrder
    route_departure?: SortOrderInput | SortOrder
    route_destination?: SortOrderInput | SortOrder
    _count?: flightsCountOrderByAggregateInput
    _avg?: flightsAvgOrderByAggregateInput
    _max?: flightsMaxOrderByAggregateInput
    _min?: flightsMinOrderByAggregateInput
    _sum?: flightsSumOrderByAggregateInput
  }

  export type flightsScalarWhereWithAggregatesInput = {
    AND?: flightsScalarWhereWithAggregatesInput | flightsScalarWhereWithAggregatesInput[]
    OR?: flightsScalarWhereWithAggregatesInput[]
    NOT?: flightsScalarWhereWithAggregatesInput | flightsScalarWhereWithAggregatesInput[]
    code?: UuidWithAggregatesFilter<"flights"> | string
    duration?: IntNullableWithAggregatesFilter<"flights"> | number | null
    aircraft_id?: IntNullableWithAggregatesFilter<"flights"> | number | null
    liftoff_date?: DateTimeNullableWithAggregatesFilter<"flights"> | Date | string | null
    route_departure?: IntNullableWithAggregatesFilter<"flights"> | number | null
    route_destination?: IntNullableWithAggregatesFilter<"flights"> | number | null
  }

  export type routesWhereInput = {
    AND?: routesWhereInput | routesWhereInput[]
    OR?: routesWhereInput[]
    NOT?: routesWhereInput | routesWhereInput[]
    departure?: IntFilter<"routes"> | number
    destination?: IntFilter<"routes"> | number
    flights?: FlightsListRelationFilter
    airports_routes_departureToairports?: XOR<AirportsScalarRelationFilter, airportsWhereInput>
    airports_routes_destinationToairports?: XOR<AirportsScalarRelationFilter, airportsWhereInput>
    uses?: UsesListRelationFilter
  }

  export type routesOrderByWithRelationInput = {
    departure?: SortOrder
    destination?: SortOrder
    flights?: flightsOrderByRelationAggregateInput
    airports_routes_departureToairports?: airportsOrderByWithRelationInput
    airports_routes_destinationToairports?: airportsOrderByWithRelationInput
    uses?: usesOrderByRelationAggregateInput
  }

  export type routesWhereUniqueInput = Prisma.AtLeast<{
    departure_destination?: routesDepartureDestinationCompoundUniqueInput
    AND?: routesWhereInput | routesWhereInput[]
    OR?: routesWhereInput[]
    NOT?: routesWhereInput | routesWhereInput[]
    departure?: IntFilter<"routes"> | number
    destination?: IntFilter<"routes"> | number
    flights?: FlightsListRelationFilter
    airports_routes_departureToairports?: XOR<AirportsScalarRelationFilter, airportsWhereInput>
    airports_routes_destinationToairports?: XOR<AirportsScalarRelationFilter, airportsWhereInput>
    uses?: UsesListRelationFilter
  }, "departure_destination">

  export type routesOrderByWithAggregationInput = {
    departure?: SortOrder
    destination?: SortOrder
    _count?: routesCountOrderByAggregateInput
    _avg?: routesAvgOrderByAggregateInput
    _max?: routesMaxOrderByAggregateInput
    _min?: routesMinOrderByAggregateInput
    _sum?: routesSumOrderByAggregateInput
  }

  export type routesScalarWhereWithAggregatesInput = {
    AND?: routesScalarWhereWithAggregatesInput | routesScalarWhereWithAggregatesInput[]
    OR?: routesScalarWhereWithAggregatesInput[]
    NOT?: routesScalarWhereWithAggregatesInput | routesScalarWhereWithAggregatesInput[]
    departure?: IntWithAggregatesFilter<"routes"> | number
    destination?: IntWithAggregatesFilter<"routes"> | number
  }

  export type seatsWhereInput = {
    AND?: seatsWhereInput | seatsWhereInput[]
    OR?: seatsWhereInput[]
    NOT?: seatsWhereInput | seatsWhereInput[]
    id?: IntFilter<"seats"> | number
    postion?: StringNullableFilter<"seats"> | string | null
    aircraft_id?: IntNullableFilter<"seats"> | number | null
    bookings?: BookingsListRelationFilter
    aircrafts?: XOR<AircraftsNullableScalarRelationFilter, aircraftsWhereInput> | null
  }

  export type seatsOrderByWithRelationInput = {
    id?: SortOrder
    postion?: SortOrderInput | SortOrder
    aircraft_id?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    aircrafts?: aircraftsOrderByWithRelationInput
  }

  export type seatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: seatsWhereInput | seatsWhereInput[]
    OR?: seatsWhereInput[]
    NOT?: seatsWhereInput | seatsWhereInput[]
    postion?: StringNullableFilter<"seats"> | string | null
    aircraft_id?: IntNullableFilter<"seats"> | number | null
    bookings?: BookingsListRelationFilter
    aircrafts?: XOR<AircraftsNullableScalarRelationFilter, aircraftsWhereInput> | null
  }, "id">

  export type seatsOrderByWithAggregationInput = {
    id?: SortOrder
    postion?: SortOrderInput | SortOrder
    aircraft_id?: SortOrderInput | SortOrder
    _count?: seatsCountOrderByAggregateInput
    _avg?: seatsAvgOrderByAggregateInput
    _max?: seatsMaxOrderByAggregateInput
    _min?: seatsMinOrderByAggregateInput
    _sum?: seatsSumOrderByAggregateInput
  }

  export type seatsScalarWhereWithAggregatesInput = {
    AND?: seatsScalarWhereWithAggregatesInput | seatsScalarWhereWithAggregatesInput[]
    OR?: seatsScalarWhereWithAggregatesInput[]
    NOT?: seatsScalarWhereWithAggregatesInput | seatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"seats"> | number
    postion?: StringNullableWithAggregatesFilter<"seats"> | string | null
    aircraft_id?: IntNullableWithAggregatesFilter<"seats"> | number | null
  }

  export type ticketsWhereInput = {
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    code?: StringFilter<"tickets"> | string
    type?: StringNullableFilter<"tickets"> | string | null
    price?: FloatNullableFilter<"tickets"> | number | null
    fligt_code?: UuidNullableFilter<"tickets"> | string | null
    bookings?: BookingsListRelationFilter
    flights?: XOR<FlightsNullableScalarRelationFilter, flightsWhereInput> | null
  }

  export type ticketsOrderByWithRelationInput = {
    code?: SortOrder
    type?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    fligt_code?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    flights?: flightsOrderByWithRelationInput
  }

  export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ticketsWhereInput | ticketsWhereInput[]
    OR?: ticketsWhereInput[]
    NOT?: ticketsWhereInput | ticketsWhereInput[]
    type?: StringNullableFilter<"tickets"> | string | null
    price?: FloatNullableFilter<"tickets"> | number | null
    fligt_code?: UuidNullableFilter<"tickets"> | string | null
    bookings?: BookingsListRelationFilter
    flights?: XOR<FlightsNullableScalarRelationFilter, flightsWhereInput> | null
  }, "code">

  export type ticketsOrderByWithAggregationInput = {
    code?: SortOrder
    type?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    fligt_code?: SortOrderInput | SortOrder
    _count?: ticketsCountOrderByAggregateInput
    _avg?: ticketsAvgOrderByAggregateInput
    _max?: ticketsMaxOrderByAggregateInput
    _min?: ticketsMinOrderByAggregateInput
    _sum?: ticketsSumOrderByAggregateInput
  }

  export type ticketsScalarWhereWithAggregatesInput = {
    AND?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    OR?: ticketsScalarWhereWithAggregatesInput[]
    NOT?: ticketsScalarWhereWithAggregatesInput | ticketsScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"tickets"> | string
    type?: StringNullableWithAggregatesFilter<"tickets"> | string | null
    price?: FloatNullableWithAggregatesFilter<"tickets"> | number | null
    fligt_code?: UuidNullableWithAggregatesFilter<"tickets"> | string | null
  }

  export type tripsWhereInput = {
    AND?: tripsWhereInput | tripsWhereInput[]
    OR?: tripsWhereInput[]
    NOT?: tripsWhereInput | tripsWhereInput[]
    id?: IntFilter<"trips"> | number
    creation_date?: DateTimeNullableFilter<"trips"> | Date | string | null
    user_id?: IntNullableFilter<"trips"> | number | null
    bookings?: BookingsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type tripsOrderByWithRelationInput = {
    id?: SortOrder
    creation_date?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type tripsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tripsWhereInput | tripsWhereInput[]
    OR?: tripsWhereInput[]
    NOT?: tripsWhereInput | tripsWhereInput[]
    creation_date?: DateTimeNullableFilter<"trips"> | Date | string | null
    user_id?: IntNullableFilter<"trips"> | number | null
    bookings?: BookingsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type tripsOrderByWithAggregationInput = {
    id?: SortOrder
    creation_date?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: tripsCountOrderByAggregateInput
    _avg?: tripsAvgOrderByAggregateInput
    _max?: tripsMaxOrderByAggregateInput
    _min?: tripsMinOrderByAggregateInput
    _sum?: tripsSumOrderByAggregateInput
  }

  export type tripsScalarWhereWithAggregatesInput = {
    AND?: tripsScalarWhereWithAggregatesInput | tripsScalarWhereWithAggregatesInput[]
    OR?: tripsScalarWhereWithAggregatesInput[]
    NOT?: tripsScalarWhereWithAggregatesInput | tripsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trips"> | number
    creation_date?: DateTimeNullableWithAggregatesFilter<"trips"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"trips"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: IntNullableFilter<"users"> | number | null
    trips?: TripsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    trips?: tripsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: IntNullableFilter<"users"> | number | null
    trips?: TripsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type usesWhereInput = {
    AND?: usesWhereInput | usesWhereInput[]
    OR?: usesWhereInput[]
    NOT?: usesWhereInput | usesWhereInput[]
    id?: IntFilter<"uses"> | number
    airline_name?: StringNullableFilter<"uses"> | string | null
    route_departure?: IntNullableFilter<"uses"> | number | null
    route_destination?: IntNullableFilter<"uses"> | number | null
    airlines?: XOR<AirlinesNullableScalarRelationFilter, airlinesWhereInput> | null
    routes?: XOR<RoutesNullableScalarRelationFilter, routesWhereInput> | null
  }

  export type usesOrderByWithRelationInput = {
    id?: SortOrder
    airline_name?: SortOrderInput | SortOrder
    route_departure?: SortOrderInput | SortOrder
    route_destination?: SortOrderInput | SortOrder
    airlines?: airlinesOrderByWithRelationInput
    routes?: routesOrderByWithRelationInput
  }

  export type usesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usesWhereInput | usesWhereInput[]
    OR?: usesWhereInput[]
    NOT?: usesWhereInput | usesWhereInput[]
    airline_name?: StringNullableFilter<"uses"> | string | null
    route_departure?: IntNullableFilter<"uses"> | number | null
    route_destination?: IntNullableFilter<"uses"> | number | null
    airlines?: XOR<AirlinesNullableScalarRelationFilter, airlinesWhereInput> | null
    routes?: XOR<RoutesNullableScalarRelationFilter, routesWhereInput> | null
  }, "id">

  export type usesOrderByWithAggregationInput = {
    id?: SortOrder
    airline_name?: SortOrderInput | SortOrder
    route_departure?: SortOrderInput | SortOrder
    route_destination?: SortOrderInput | SortOrder
    _count?: usesCountOrderByAggregateInput
    _avg?: usesAvgOrderByAggregateInput
    _max?: usesMaxOrderByAggregateInput
    _min?: usesMinOrderByAggregateInput
    _sum?: usesSumOrderByAggregateInput
  }

  export type usesScalarWhereWithAggregatesInput = {
    AND?: usesScalarWhereWithAggregatesInput | usesScalarWhereWithAggregatesInput[]
    OR?: usesScalarWhereWithAggregatesInput[]
    NOT?: usesScalarWhereWithAggregatesInput | usesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"uses"> | number
    airline_name?: StringNullableWithAggregatesFilter<"uses"> | string | null
    route_departure?: IntNullableWithAggregatesFilter<"uses"> | number | null
    route_destination?: IntNullableWithAggregatesFilter<"uses"> | number | null
  }

  export type aircraftsCreateInput = {
    model?: string | null
    seats_capacity?: number | null
    airlines: airlinesCreateNestedOneWithoutAircraftsInput
    flights?: flightsCreateNestedManyWithoutAircraftsInput
    seats?: seatsCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsUncheckedCreateInput = {
    id?: number
    model?: string | null
    seats_capacity?: number | null
    owner_name: string
    flights?: flightsUncheckedCreateNestedManyWithoutAircraftsInput
    seats?: seatsUncheckedCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsUpdateInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    airlines?: airlinesUpdateOneRequiredWithoutAircraftsNestedInput
    flights?: flightsUpdateManyWithoutAircraftsNestedInput
    seats?: seatsUpdateManyWithoutAircraftsNestedInput
  }

  export type aircraftsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    owner_name?: StringFieldUpdateOperationsInput | string
    flights?: flightsUncheckedUpdateManyWithoutAircraftsNestedInput
    seats?: seatsUncheckedUpdateManyWithoutAircraftsNestedInput
  }

  export type aircraftsCreateManyInput = {
    id?: number
    model?: string | null
    seats_capacity?: number | null
    owner_name: string
  }

  export type aircraftsUpdateManyMutationInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aircraftsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    owner_name?: StringFieldUpdateOperationsInput | string
  }

  export type airlinesCreateInput = {
    name: string
    password: string
    country: string
    motto?: string | null
    aircrafts?: aircraftsCreateNestedManyWithoutAirlinesInput
    uses?: usesCreateNestedManyWithoutAirlinesInput
  }

  export type airlinesUncheckedCreateInput = {
    name: string
    password: string
    country: string
    motto?: string | null
    aircrafts?: aircraftsUncheckedCreateNestedManyWithoutAirlinesInput
    uses?: usesUncheckedCreateNestedManyWithoutAirlinesInput
  }

  export type airlinesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    aircrafts?: aircraftsUpdateManyWithoutAirlinesNestedInput
    uses?: usesUpdateManyWithoutAirlinesNestedInput
  }

  export type airlinesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    aircrafts?: aircraftsUncheckedUpdateManyWithoutAirlinesNestedInput
    uses?: usesUncheckedUpdateManyWithoutAirlinesNestedInput
  }

  export type airlinesCreateManyInput = {
    name: string
    password: string
    country: string
    motto?: string | null
  }

  export type airlinesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type airlinesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type airportsCreateInput = {
    name: string
    city: string
    country: string
    time_zone: number
    routes_routes_departureToairports?: routesCreateNestedManyWithoutAirports_routes_departureToairportsInput
    routes_routes_destinationToairports?: routesCreateNestedManyWithoutAirports_routes_destinationToairportsInput
  }

  export type airportsUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    country: string
    time_zone: number
    routes_routes_departureToairports?: routesUncheckedCreateNestedManyWithoutAirports_routes_departureToairportsInput
    routes_routes_destinationToairports?: routesUncheckedCreateNestedManyWithoutAirports_routes_destinationToairportsInput
  }

  export type airportsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
    routes_routes_departureToairports?: routesUpdateManyWithoutAirports_routes_departureToairportsNestedInput
    routes_routes_destinationToairports?: routesUpdateManyWithoutAirports_routes_destinationToairportsNestedInput
  }

  export type airportsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
    routes_routes_departureToairports?: routesUncheckedUpdateManyWithoutAirports_routes_departureToairportsNestedInput
    routes_routes_destinationToairports?: routesUncheckedUpdateManyWithoutAirports_routes_destinationToairportsNestedInput
  }

  export type airportsCreateManyInput = {
    id?: number
    name: string
    city: string
    country: string
    time_zone: number
  }

  export type airportsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
  }

  export type airportsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
  }

  export type bookingsCreateInput = {
    extras?: extrasCreateNestedOneWithoutBookingsInput
    seats?: seatsCreateNestedOneWithoutBookingsInput
    tickets?: ticketsCreateNestedOneWithoutBookingsInput
    trips?: tripsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: number
    ticket_code?: string | null
    seat_id?: number | null
    trip_id?: number | null
    extras_id?: number | null
  }

  export type bookingsUpdateInput = {
    extras?: extrasUpdateOneWithoutBookingsNestedInput
    seats?: seatsUpdateOneWithoutBookingsNestedInput
    tickets?: ticketsUpdateOneWithoutBookingsNestedInput
    trips?: tripsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsCreateManyInput = {
    id?: number
    ticket_code?: string | null
    seat_id?: number | null
    trip_id?: number | null
    extras_id?: number | null
  }

  export type bookingsUpdateManyMutationInput = {

  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type extrasCreateInput = {
    description: string
    price?: number | null
    bookings?: bookingsCreateNestedManyWithoutExtrasInput
  }

  export type extrasUncheckedCreateInput = {
    id?: number
    description: string
    price?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutExtrasInput
  }

  export type extrasUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutExtrasNestedInput
  }

  export type extrasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutExtrasNestedInput
  }

  export type extrasCreateManyInput = {
    id?: number
    description: string
    price?: number | null
  }

  export type extrasUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type extrasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type flightsCreateInput = {
    code?: string
    duration?: number | null
    liftoff_date?: Date | string | null
    aircrafts?: aircraftsCreateNestedOneWithoutFlightsInput
    routes?: routesCreateNestedOneWithoutFlightsInput
    tickets?: ticketsCreateNestedManyWithoutFlightsInput
  }

  export type flightsUncheckedCreateInput = {
    code?: string
    duration?: number | null
    aircraft_id?: number | null
    liftoff_date?: Date | string | null
    route_departure?: number | null
    route_destination?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type flightsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aircrafts?: aircraftsUpdateOneWithoutFlightsNestedInput
    routes?: routesUpdateOneWithoutFlightsNestedInput
    tickets?: ticketsUpdateManyWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type flightsCreateManyInput = {
    code?: string
    duration?: number | null
    aircraft_id?: number | null
    liftoff_date?: Date | string | null
    route_departure?: number | null
    route_destination?: number | null
  }

  export type flightsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type flightsUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type routesCreateInput = {
    flights?: flightsCreateNestedManyWithoutRoutesInput
    airports_routes_departureToairports: airportsCreateNestedOneWithoutRoutes_routes_departureToairportsInput
    airports_routes_destinationToairports: airportsCreateNestedOneWithoutRoutes_routes_destinationToairportsInput
    uses?: usesCreateNestedManyWithoutRoutesInput
  }

  export type routesUncheckedCreateInput = {
    departure: number
    destination: number
    flights?: flightsUncheckedCreateNestedManyWithoutRoutesInput
    uses?: usesUncheckedCreateNestedManyWithoutRoutesInput
  }

  export type routesUpdateInput = {
    flights?: flightsUpdateManyWithoutRoutesNestedInput
    airports_routes_departureToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_departureToairportsNestedInput
    airports_routes_destinationToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_destinationToairportsNestedInput
    uses?: usesUpdateManyWithoutRoutesNestedInput
  }

  export type routesUncheckedUpdateInput = {
    departure?: IntFieldUpdateOperationsInput | number
    destination?: IntFieldUpdateOperationsInput | number
    flights?: flightsUncheckedUpdateManyWithoutRoutesNestedInput
    uses?: usesUncheckedUpdateManyWithoutRoutesNestedInput
  }

  export type routesCreateManyInput = {
    departure: number
    destination: number
  }

  export type routesUpdateManyMutationInput = {

  }

  export type routesUncheckedUpdateManyInput = {
    departure?: IntFieldUpdateOperationsInput | number
    destination?: IntFieldUpdateOperationsInput | number
  }

  export type seatsCreateInput = {
    postion?: string | null
    bookings?: bookingsCreateNestedManyWithoutSeatsInput
    aircrafts?: aircraftsCreateNestedOneWithoutSeatsInput
  }

  export type seatsUncheckedCreateInput = {
    id?: number
    postion?: string | null
    aircraft_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSeatsInput
  }

  export type seatsUpdateInput = {
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUpdateManyWithoutSeatsNestedInput
    aircrafts?: aircraftsUpdateOneWithoutSeatsNestedInput
  }

  export type seatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutSeatsNestedInput
  }

  export type seatsCreateManyInput = {
    id?: number
    postion?: string | null
    aircraft_id?: number | null
  }

  export type seatsUpdateManyMutationInput = {
    postion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticketsCreateInput = {
    code: string
    type?: string | null
    price?: number | null
    bookings?: bookingsCreateNestedManyWithoutTicketsInput
    flights?: flightsCreateNestedOneWithoutTicketsInput
  }

  export type ticketsUncheckedCreateInput = {
    code: string
    type?: string | null
    price?: number | null
    fligt_code?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTicketsNestedInput
    flights?: flightsUpdateOneWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    fligt_code?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsCreateManyInput = {
    code: string
    type?: string | null
    price?: number | null
    fligt_code?: string | null
  }

  export type ticketsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ticketsUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    fligt_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tripsCreateInput = {
    creation_date?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
    users?: usersCreateNestedOneWithoutTripsInput
  }

  export type tripsUncheckedCreateInput = {
    id?: number
    creation_date?: Date | string | null
    user_id?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsUpdateInput = {
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
    users?: usersUpdateOneWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type tripsCreateManyInput = {
    id?: number
    creation_date?: Date | string | null
    user_id?: number | null
  }

  export type tripsUpdateManyMutationInput = {
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tripsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    role?: number | null
    trips?: tripsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: number | null
    trips?: tripsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    trips?: tripsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    trips?: tripsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: number | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usesCreateInput = {
    airlines?: airlinesCreateNestedOneWithoutUsesInput
    routes?: routesCreateNestedOneWithoutUsesInput
  }

  export type usesUncheckedCreateInput = {
    id?: number
    airline_name?: string | null
    route_departure?: number | null
    route_destination?: number | null
  }

  export type usesUpdateInput = {
    airlines?: airlinesUpdateOneWithoutUsesNestedInput
    routes?: routesUpdateOneWithoutUsesNestedInput
  }

  export type usesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline_name?: NullableStringFieldUpdateOperationsInput | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usesCreateManyInput = {
    id?: number
    airline_name?: string | null
    route_departure?: number | null
    route_destination?: number | null
  }

  export type usesUpdateManyMutationInput = {

  }

  export type usesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline_name?: NullableStringFieldUpdateOperationsInput | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AirlinesScalarRelationFilter = {
    is?: airlinesWhereInput
    isNot?: airlinesWhereInput
  }

  export type FlightsListRelationFilter = {
    every?: flightsWhereInput
    some?: flightsWhereInput
    none?: flightsWhereInput
  }

  export type SeatsListRelationFilter = {
    every?: seatsWhereInput
    some?: seatsWhereInput
    none?: seatsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type flightsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type aircraftsCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    seats_capacity?: SortOrder
    owner_name?: SortOrder
  }

  export type aircraftsAvgOrderByAggregateInput = {
    id?: SortOrder
    seats_capacity?: SortOrder
  }

  export type aircraftsMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    seats_capacity?: SortOrder
    owner_name?: SortOrder
  }

  export type aircraftsMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    seats_capacity?: SortOrder
    owner_name?: SortOrder
  }

  export type aircraftsSumOrderByAggregateInput = {
    id?: SortOrder
    seats_capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AircraftsListRelationFilter = {
    every?: aircraftsWhereInput
    some?: aircraftsWhereInput
    none?: aircraftsWhereInput
  }

  export type UsesListRelationFilter = {
    every?: usesWhereInput
    some?: usesWhereInput
    none?: usesWhereInput
  }

  export type aircraftsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type airlinesCountOrderByAggregateInput = {
    name?: SortOrder
    password?: SortOrder
    country?: SortOrder
    motto?: SortOrder
  }

  export type airlinesMaxOrderByAggregateInput = {
    name?: SortOrder
    password?: SortOrder
    country?: SortOrder
    motto?: SortOrder
  }

  export type airlinesMinOrderByAggregateInput = {
    name?: SortOrder
    password?: SortOrder
    country?: SortOrder
    motto?: SortOrder
  }

  export type RoutesListRelationFilter = {
    every?: routesWhereInput
    some?: routesWhereInput
    none?: routesWhereInput
  }

  export type routesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type airportsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    time_zone?: SortOrder
  }

  export type airportsAvgOrderByAggregateInput = {
    id?: SortOrder
    time_zone?: SortOrder
  }

  export type airportsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    time_zone?: SortOrder
  }

  export type airportsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    time_zone?: SortOrder
  }

  export type airportsSumOrderByAggregateInput = {
    id?: SortOrder
    time_zone?: SortOrder
  }

  export type ExtrasNullableScalarRelationFilter = {
    is?: extrasWhereInput | null
    isNot?: extrasWhereInput | null
  }

  export type SeatsNullableScalarRelationFilter = {
    is?: seatsWhereInput | null
    isNot?: seatsWhereInput | null
  }

  export type TicketsNullableScalarRelationFilter = {
    is?: ticketsWhereInput | null
    isNot?: ticketsWhereInput | null
  }

  export type TripsNullableScalarRelationFilter = {
    is?: tripsWhereInput | null
    isNot?: tripsWhereInput | null
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    ticket_code?: SortOrder
    seat_id?: SortOrder
    trip_id?: SortOrder
    extras_id?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    id?: SortOrder
    seat_id?: SortOrder
    trip_id?: SortOrder
    extras_id?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_code?: SortOrder
    seat_id?: SortOrder
    trip_id?: SortOrder
    extras_id?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_code?: SortOrder
    seat_id?: SortOrder
    trip_id?: SortOrder
    extras_id?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    id?: SortOrder
    seat_id?: SortOrder
    trip_id?: SortOrder
    extras_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type extrasCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type extrasAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type extrasMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type extrasMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type extrasSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AircraftsNullableScalarRelationFilter = {
    is?: aircraftsWhereInput | null
    isNot?: aircraftsWhereInput | null
  }

  export type RoutesNullableScalarRelationFilter = {
    is?: routesWhereInput | null
    isNot?: routesWhereInput | null
  }

  export type TicketsListRelationFilter = {
    every?: ticketsWhereInput
    some?: ticketsWhereInput
    none?: ticketsWhereInput
  }

  export type ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type flightsCountOrderByAggregateInput = {
    code?: SortOrder
    duration?: SortOrder
    aircraft_id?: SortOrder
    liftoff_date?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type flightsAvgOrderByAggregateInput = {
    duration?: SortOrder
    aircraft_id?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type flightsMaxOrderByAggregateInput = {
    code?: SortOrder
    duration?: SortOrder
    aircraft_id?: SortOrder
    liftoff_date?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type flightsMinOrderByAggregateInput = {
    code?: SortOrder
    duration?: SortOrder
    aircraft_id?: SortOrder
    liftoff_date?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type flightsSumOrderByAggregateInput = {
    duration?: SortOrder
    aircraft_id?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AirportsScalarRelationFilter = {
    is?: airportsWhereInput
    isNot?: airportsWhereInput
  }

  export type routesDepartureDestinationCompoundUniqueInput = {
    departure: number
    destination: number
  }

  export type routesCountOrderByAggregateInput = {
    departure?: SortOrder
    destination?: SortOrder
  }

  export type routesAvgOrderByAggregateInput = {
    departure?: SortOrder
    destination?: SortOrder
  }

  export type routesMaxOrderByAggregateInput = {
    departure?: SortOrder
    destination?: SortOrder
  }

  export type routesMinOrderByAggregateInput = {
    departure?: SortOrder
    destination?: SortOrder
  }

  export type routesSumOrderByAggregateInput = {
    departure?: SortOrder
    destination?: SortOrder
  }

  export type seatsCountOrderByAggregateInput = {
    id?: SortOrder
    postion?: SortOrder
    aircraft_id?: SortOrder
  }

  export type seatsAvgOrderByAggregateInput = {
    id?: SortOrder
    aircraft_id?: SortOrder
  }

  export type seatsMaxOrderByAggregateInput = {
    id?: SortOrder
    postion?: SortOrder
    aircraft_id?: SortOrder
  }

  export type seatsMinOrderByAggregateInput = {
    id?: SortOrder
    postion?: SortOrder
    aircraft_id?: SortOrder
  }

  export type seatsSumOrderByAggregateInput = {
    id?: SortOrder
    aircraft_id?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type FlightsNullableScalarRelationFilter = {
    is?: flightsWhereInput | null
    isNot?: flightsWhereInput | null
  }

  export type ticketsCountOrderByAggregateInput = {
    code?: SortOrder
    type?: SortOrder
    price?: SortOrder
    fligt_code?: SortOrder
  }

  export type ticketsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ticketsMaxOrderByAggregateInput = {
    code?: SortOrder
    type?: SortOrder
    price?: SortOrder
    fligt_code?: SortOrder
  }

  export type ticketsMinOrderByAggregateInput = {
    code?: SortOrder
    type?: SortOrder
    price?: SortOrder
    fligt_code?: SortOrder
  }

  export type ticketsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type tripsCountOrderByAggregateInput = {
    id?: SortOrder
    creation_date?: SortOrder
    user_id?: SortOrder
  }

  export type tripsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type tripsMaxOrderByAggregateInput = {
    id?: SortOrder
    creation_date?: SortOrder
    user_id?: SortOrder
  }

  export type tripsMinOrderByAggregateInput = {
    id?: SortOrder
    creation_date?: SortOrder
    user_id?: SortOrder
  }

  export type tripsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TripsListRelationFilter = {
    every?: tripsWhereInput
    some?: tripsWhereInput
    none?: tripsWhereInput
  }

  export type tripsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type AirlinesNullableScalarRelationFilter = {
    is?: airlinesWhereInput | null
    isNot?: airlinesWhereInput | null
  }

  export type usesCountOrderByAggregateInput = {
    id?: SortOrder
    airline_name?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type usesAvgOrderByAggregateInput = {
    id?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type usesMaxOrderByAggregateInput = {
    id?: SortOrder
    airline_name?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type usesMinOrderByAggregateInput = {
    id?: SortOrder
    airline_name?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type usesSumOrderByAggregateInput = {
    id?: SortOrder
    route_departure?: SortOrder
    route_destination?: SortOrder
  }

  export type airlinesCreateNestedOneWithoutAircraftsInput = {
    create?: XOR<airlinesCreateWithoutAircraftsInput, airlinesUncheckedCreateWithoutAircraftsInput>
    connectOrCreate?: airlinesCreateOrConnectWithoutAircraftsInput
    connect?: airlinesWhereUniqueInput
  }

  export type flightsCreateNestedManyWithoutAircraftsInput = {
    create?: XOR<flightsCreateWithoutAircraftsInput, flightsUncheckedCreateWithoutAircraftsInput> | flightsCreateWithoutAircraftsInput[] | flightsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutAircraftsInput | flightsCreateOrConnectWithoutAircraftsInput[]
    createMany?: flightsCreateManyAircraftsInputEnvelope
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
  }

  export type seatsCreateNestedManyWithoutAircraftsInput = {
    create?: XOR<seatsCreateWithoutAircraftsInput, seatsUncheckedCreateWithoutAircraftsInput> | seatsCreateWithoutAircraftsInput[] | seatsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: seatsCreateOrConnectWithoutAircraftsInput | seatsCreateOrConnectWithoutAircraftsInput[]
    createMany?: seatsCreateManyAircraftsInputEnvelope
    connect?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
  }

  export type flightsUncheckedCreateNestedManyWithoutAircraftsInput = {
    create?: XOR<flightsCreateWithoutAircraftsInput, flightsUncheckedCreateWithoutAircraftsInput> | flightsCreateWithoutAircraftsInput[] | flightsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutAircraftsInput | flightsCreateOrConnectWithoutAircraftsInput[]
    createMany?: flightsCreateManyAircraftsInputEnvelope
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
  }

  export type seatsUncheckedCreateNestedManyWithoutAircraftsInput = {
    create?: XOR<seatsCreateWithoutAircraftsInput, seatsUncheckedCreateWithoutAircraftsInput> | seatsCreateWithoutAircraftsInput[] | seatsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: seatsCreateOrConnectWithoutAircraftsInput | seatsCreateOrConnectWithoutAircraftsInput[]
    createMany?: seatsCreateManyAircraftsInputEnvelope
    connect?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type airlinesUpdateOneRequiredWithoutAircraftsNestedInput = {
    create?: XOR<airlinesCreateWithoutAircraftsInput, airlinesUncheckedCreateWithoutAircraftsInput>
    connectOrCreate?: airlinesCreateOrConnectWithoutAircraftsInput
    upsert?: airlinesUpsertWithoutAircraftsInput
    connect?: airlinesWhereUniqueInput
    update?: XOR<XOR<airlinesUpdateToOneWithWhereWithoutAircraftsInput, airlinesUpdateWithoutAircraftsInput>, airlinesUncheckedUpdateWithoutAircraftsInput>
  }

  export type flightsUpdateManyWithoutAircraftsNestedInput = {
    create?: XOR<flightsCreateWithoutAircraftsInput, flightsUncheckedCreateWithoutAircraftsInput> | flightsCreateWithoutAircraftsInput[] | flightsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutAircraftsInput | flightsCreateOrConnectWithoutAircraftsInput[]
    upsert?: flightsUpsertWithWhereUniqueWithoutAircraftsInput | flightsUpsertWithWhereUniqueWithoutAircraftsInput[]
    createMany?: flightsCreateManyAircraftsInputEnvelope
    set?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    disconnect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    delete?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    update?: flightsUpdateWithWhereUniqueWithoutAircraftsInput | flightsUpdateWithWhereUniqueWithoutAircraftsInput[]
    updateMany?: flightsUpdateManyWithWhereWithoutAircraftsInput | flightsUpdateManyWithWhereWithoutAircraftsInput[]
    deleteMany?: flightsScalarWhereInput | flightsScalarWhereInput[]
  }

  export type seatsUpdateManyWithoutAircraftsNestedInput = {
    create?: XOR<seatsCreateWithoutAircraftsInput, seatsUncheckedCreateWithoutAircraftsInput> | seatsCreateWithoutAircraftsInput[] | seatsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: seatsCreateOrConnectWithoutAircraftsInput | seatsCreateOrConnectWithoutAircraftsInput[]
    upsert?: seatsUpsertWithWhereUniqueWithoutAircraftsInput | seatsUpsertWithWhereUniqueWithoutAircraftsInput[]
    createMany?: seatsCreateManyAircraftsInputEnvelope
    set?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    disconnect?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    delete?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    connect?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    update?: seatsUpdateWithWhereUniqueWithoutAircraftsInput | seatsUpdateWithWhereUniqueWithoutAircraftsInput[]
    updateMany?: seatsUpdateManyWithWhereWithoutAircraftsInput | seatsUpdateManyWithWhereWithoutAircraftsInput[]
    deleteMany?: seatsScalarWhereInput | seatsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type flightsUncheckedUpdateManyWithoutAircraftsNestedInput = {
    create?: XOR<flightsCreateWithoutAircraftsInput, flightsUncheckedCreateWithoutAircraftsInput> | flightsCreateWithoutAircraftsInput[] | flightsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutAircraftsInput | flightsCreateOrConnectWithoutAircraftsInput[]
    upsert?: flightsUpsertWithWhereUniqueWithoutAircraftsInput | flightsUpsertWithWhereUniqueWithoutAircraftsInput[]
    createMany?: flightsCreateManyAircraftsInputEnvelope
    set?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    disconnect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    delete?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    update?: flightsUpdateWithWhereUniqueWithoutAircraftsInput | flightsUpdateWithWhereUniqueWithoutAircraftsInput[]
    updateMany?: flightsUpdateManyWithWhereWithoutAircraftsInput | flightsUpdateManyWithWhereWithoutAircraftsInput[]
    deleteMany?: flightsScalarWhereInput | flightsScalarWhereInput[]
  }

  export type seatsUncheckedUpdateManyWithoutAircraftsNestedInput = {
    create?: XOR<seatsCreateWithoutAircraftsInput, seatsUncheckedCreateWithoutAircraftsInput> | seatsCreateWithoutAircraftsInput[] | seatsUncheckedCreateWithoutAircraftsInput[]
    connectOrCreate?: seatsCreateOrConnectWithoutAircraftsInput | seatsCreateOrConnectWithoutAircraftsInput[]
    upsert?: seatsUpsertWithWhereUniqueWithoutAircraftsInput | seatsUpsertWithWhereUniqueWithoutAircraftsInput[]
    createMany?: seatsCreateManyAircraftsInputEnvelope
    set?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    disconnect?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    delete?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    connect?: seatsWhereUniqueInput | seatsWhereUniqueInput[]
    update?: seatsUpdateWithWhereUniqueWithoutAircraftsInput | seatsUpdateWithWhereUniqueWithoutAircraftsInput[]
    updateMany?: seatsUpdateManyWithWhereWithoutAircraftsInput | seatsUpdateManyWithWhereWithoutAircraftsInput[]
    deleteMany?: seatsScalarWhereInput | seatsScalarWhereInput[]
  }

  export type aircraftsCreateNestedManyWithoutAirlinesInput = {
    create?: XOR<aircraftsCreateWithoutAirlinesInput, aircraftsUncheckedCreateWithoutAirlinesInput> | aircraftsCreateWithoutAirlinesInput[] | aircraftsUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: aircraftsCreateOrConnectWithoutAirlinesInput | aircraftsCreateOrConnectWithoutAirlinesInput[]
    createMany?: aircraftsCreateManyAirlinesInputEnvelope
    connect?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
  }

  export type usesCreateNestedManyWithoutAirlinesInput = {
    create?: XOR<usesCreateWithoutAirlinesInput, usesUncheckedCreateWithoutAirlinesInput> | usesCreateWithoutAirlinesInput[] | usesUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutAirlinesInput | usesCreateOrConnectWithoutAirlinesInput[]
    createMany?: usesCreateManyAirlinesInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type aircraftsUncheckedCreateNestedManyWithoutAirlinesInput = {
    create?: XOR<aircraftsCreateWithoutAirlinesInput, aircraftsUncheckedCreateWithoutAirlinesInput> | aircraftsCreateWithoutAirlinesInput[] | aircraftsUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: aircraftsCreateOrConnectWithoutAirlinesInput | aircraftsCreateOrConnectWithoutAirlinesInput[]
    createMany?: aircraftsCreateManyAirlinesInputEnvelope
    connect?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
  }

  export type usesUncheckedCreateNestedManyWithoutAirlinesInput = {
    create?: XOR<usesCreateWithoutAirlinesInput, usesUncheckedCreateWithoutAirlinesInput> | usesCreateWithoutAirlinesInput[] | usesUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutAirlinesInput | usesCreateOrConnectWithoutAirlinesInput[]
    createMany?: usesCreateManyAirlinesInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type aircraftsUpdateManyWithoutAirlinesNestedInput = {
    create?: XOR<aircraftsCreateWithoutAirlinesInput, aircraftsUncheckedCreateWithoutAirlinesInput> | aircraftsCreateWithoutAirlinesInput[] | aircraftsUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: aircraftsCreateOrConnectWithoutAirlinesInput | aircraftsCreateOrConnectWithoutAirlinesInput[]
    upsert?: aircraftsUpsertWithWhereUniqueWithoutAirlinesInput | aircraftsUpsertWithWhereUniqueWithoutAirlinesInput[]
    createMany?: aircraftsCreateManyAirlinesInputEnvelope
    set?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    disconnect?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    delete?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    connect?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    update?: aircraftsUpdateWithWhereUniqueWithoutAirlinesInput | aircraftsUpdateWithWhereUniqueWithoutAirlinesInput[]
    updateMany?: aircraftsUpdateManyWithWhereWithoutAirlinesInput | aircraftsUpdateManyWithWhereWithoutAirlinesInput[]
    deleteMany?: aircraftsScalarWhereInput | aircraftsScalarWhereInput[]
  }

  export type usesUpdateManyWithoutAirlinesNestedInput = {
    create?: XOR<usesCreateWithoutAirlinesInput, usesUncheckedCreateWithoutAirlinesInput> | usesCreateWithoutAirlinesInput[] | usesUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutAirlinesInput | usesCreateOrConnectWithoutAirlinesInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutAirlinesInput | usesUpsertWithWhereUniqueWithoutAirlinesInput[]
    createMany?: usesCreateManyAirlinesInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutAirlinesInput | usesUpdateWithWhereUniqueWithoutAirlinesInput[]
    updateMany?: usesUpdateManyWithWhereWithoutAirlinesInput | usesUpdateManyWithWhereWithoutAirlinesInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type aircraftsUncheckedUpdateManyWithoutAirlinesNestedInput = {
    create?: XOR<aircraftsCreateWithoutAirlinesInput, aircraftsUncheckedCreateWithoutAirlinesInput> | aircraftsCreateWithoutAirlinesInput[] | aircraftsUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: aircraftsCreateOrConnectWithoutAirlinesInput | aircraftsCreateOrConnectWithoutAirlinesInput[]
    upsert?: aircraftsUpsertWithWhereUniqueWithoutAirlinesInput | aircraftsUpsertWithWhereUniqueWithoutAirlinesInput[]
    createMany?: aircraftsCreateManyAirlinesInputEnvelope
    set?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    disconnect?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    delete?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    connect?: aircraftsWhereUniqueInput | aircraftsWhereUniqueInput[]
    update?: aircraftsUpdateWithWhereUniqueWithoutAirlinesInput | aircraftsUpdateWithWhereUniqueWithoutAirlinesInput[]
    updateMany?: aircraftsUpdateManyWithWhereWithoutAirlinesInput | aircraftsUpdateManyWithWhereWithoutAirlinesInput[]
    deleteMany?: aircraftsScalarWhereInput | aircraftsScalarWhereInput[]
  }

  export type usesUncheckedUpdateManyWithoutAirlinesNestedInput = {
    create?: XOR<usesCreateWithoutAirlinesInput, usesUncheckedCreateWithoutAirlinesInput> | usesCreateWithoutAirlinesInput[] | usesUncheckedCreateWithoutAirlinesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutAirlinesInput | usesCreateOrConnectWithoutAirlinesInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutAirlinesInput | usesUpsertWithWhereUniqueWithoutAirlinesInput[]
    createMany?: usesCreateManyAirlinesInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutAirlinesInput | usesUpdateWithWhereUniqueWithoutAirlinesInput[]
    updateMany?: usesUpdateManyWithWhereWithoutAirlinesInput | usesUpdateManyWithWhereWithoutAirlinesInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type routesCreateNestedManyWithoutAirports_routes_departureToairportsInput = {
    create?: XOR<routesCreateWithoutAirports_routes_departureToairportsInput, routesUncheckedCreateWithoutAirports_routes_departureToairportsInput> | routesCreateWithoutAirports_routes_departureToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_departureToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_departureToairportsInput | routesCreateOrConnectWithoutAirports_routes_departureToairportsInput[]
    createMany?: routesCreateManyAirports_routes_departureToairportsInputEnvelope
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
  }

  export type routesCreateNestedManyWithoutAirports_routes_destinationToairportsInput = {
    create?: XOR<routesCreateWithoutAirports_routes_destinationToairportsInput, routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput> | routesCreateWithoutAirports_routes_destinationToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput | routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput[]
    createMany?: routesCreateManyAirports_routes_destinationToairportsInputEnvelope
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
  }

  export type routesUncheckedCreateNestedManyWithoutAirports_routes_departureToairportsInput = {
    create?: XOR<routesCreateWithoutAirports_routes_departureToairportsInput, routesUncheckedCreateWithoutAirports_routes_departureToairportsInput> | routesCreateWithoutAirports_routes_departureToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_departureToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_departureToairportsInput | routesCreateOrConnectWithoutAirports_routes_departureToairportsInput[]
    createMany?: routesCreateManyAirports_routes_departureToairportsInputEnvelope
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
  }

  export type routesUncheckedCreateNestedManyWithoutAirports_routes_destinationToairportsInput = {
    create?: XOR<routesCreateWithoutAirports_routes_destinationToairportsInput, routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput> | routesCreateWithoutAirports_routes_destinationToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput | routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput[]
    createMany?: routesCreateManyAirports_routes_destinationToairportsInputEnvelope
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
  }

  export type routesUpdateManyWithoutAirports_routes_departureToairportsNestedInput = {
    create?: XOR<routesCreateWithoutAirports_routes_departureToairportsInput, routesUncheckedCreateWithoutAirports_routes_departureToairportsInput> | routesCreateWithoutAirports_routes_departureToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_departureToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_departureToairportsInput | routesCreateOrConnectWithoutAirports_routes_departureToairportsInput[]
    upsert?: routesUpsertWithWhereUniqueWithoutAirports_routes_departureToairportsInput | routesUpsertWithWhereUniqueWithoutAirports_routes_departureToairportsInput[]
    createMany?: routesCreateManyAirports_routes_departureToairportsInputEnvelope
    set?: routesWhereUniqueInput | routesWhereUniqueInput[]
    disconnect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    delete?: routesWhereUniqueInput | routesWhereUniqueInput[]
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    update?: routesUpdateWithWhereUniqueWithoutAirports_routes_departureToairportsInput | routesUpdateWithWhereUniqueWithoutAirports_routes_departureToairportsInput[]
    updateMany?: routesUpdateManyWithWhereWithoutAirports_routes_departureToairportsInput | routesUpdateManyWithWhereWithoutAirports_routes_departureToairportsInput[]
    deleteMany?: routesScalarWhereInput | routesScalarWhereInput[]
  }

  export type routesUpdateManyWithoutAirports_routes_destinationToairportsNestedInput = {
    create?: XOR<routesCreateWithoutAirports_routes_destinationToairportsInput, routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput> | routesCreateWithoutAirports_routes_destinationToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput | routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput[]
    upsert?: routesUpsertWithWhereUniqueWithoutAirports_routes_destinationToairportsInput | routesUpsertWithWhereUniqueWithoutAirports_routes_destinationToairportsInput[]
    createMany?: routesCreateManyAirports_routes_destinationToairportsInputEnvelope
    set?: routesWhereUniqueInput | routesWhereUniqueInput[]
    disconnect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    delete?: routesWhereUniqueInput | routesWhereUniqueInput[]
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    update?: routesUpdateWithWhereUniqueWithoutAirports_routes_destinationToairportsInput | routesUpdateWithWhereUniqueWithoutAirports_routes_destinationToairportsInput[]
    updateMany?: routesUpdateManyWithWhereWithoutAirports_routes_destinationToairportsInput | routesUpdateManyWithWhereWithoutAirports_routes_destinationToairportsInput[]
    deleteMany?: routesScalarWhereInput | routesScalarWhereInput[]
  }

  export type routesUncheckedUpdateManyWithoutAirports_routes_departureToairportsNestedInput = {
    create?: XOR<routesCreateWithoutAirports_routes_departureToairportsInput, routesUncheckedCreateWithoutAirports_routes_departureToairportsInput> | routesCreateWithoutAirports_routes_departureToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_departureToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_departureToairportsInput | routesCreateOrConnectWithoutAirports_routes_departureToairportsInput[]
    upsert?: routesUpsertWithWhereUniqueWithoutAirports_routes_departureToairportsInput | routesUpsertWithWhereUniqueWithoutAirports_routes_departureToairportsInput[]
    createMany?: routesCreateManyAirports_routes_departureToairportsInputEnvelope
    set?: routesWhereUniqueInput | routesWhereUniqueInput[]
    disconnect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    delete?: routesWhereUniqueInput | routesWhereUniqueInput[]
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    update?: routesUpdateWithWhereUniqueWithoutAirports_routes_departureToairportsInput | routesUpdateWithWhereUniqueWithoutAirports_routes_departureToairportsInput[]
    updateMany?: routesUpdateManyWithWhereWithoutAirports_routes_departureToairportsInput | routesUpdateManyWithWhereWithoutAirports_routes_departureToairportsInput[]
    deleteMany?: routesScalarWhereInput | routesScalarWhereInput[]
  }

  export type routesUncheckedUpdateManyWithoutAirports_routes_destinationToairportsNestedInput = {
    create?: XOR<routesCreateWithoutAirports_routes_destinationToairportsInput, routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput> | routesCreateWithoutAirports_routes_destinationToairportsInput[] | routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput[]
    connectOrCreate?: routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput | routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput[]
    upsert?: routesUpsertWithWhereUniqueWithoutAirports_routes_destinationToairportsInput | routesUpsertWithWhereUniqueWithoutAirports_routes_destinationToairportsInput[]
    createMany?: routesCreateManyAirports_routes_destinationToairportsInputEnvelope
    set?: routesWhereUniqueInput | routesWhereUniqueInput[]
    disconnect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    delete?: routesWhereUniqueInput | routesWhereUniqueInput[]
    connect?: routesWhereUniqueInput | routesWhereUniqueInput[]
    update?: routesUpdateWithWhereUniqueWithoutAirports_routes_destinationToairportsInput | routesUpdateWithWhereUniqueWithoutAirports_routes_destinationToairportsInput[]
    updateMany?: routesUpdateManyWithWhereWithoutAirports_routes_destinationToairportsInput | routesUpdateManyWithWhereWithoutAirports_routes_destinationToairportsInput[]
    deleteMany?: routesScalarWhereInput | routesScalarWhereInput[]
  }

  export type extrasCreateNestedOneWithoutBookingsInput = {
    create?: XOR<extrasCreateWithoutBookingsInput, extrasUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: extrasCreateOrConnectWithoutBookingsInput
    connect?: extrasWhereUniqueInput
  }

  export type seatsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<seatsCreateWithoutBookingsInput, seatsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: seatsCreateOrConnectWithoutBookingsInput
    connect?: seatsWhereUniqueInput
  }

  export type ticketsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ticketsCreateWithoutBookingsInput, ticketsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutBookingsInput
    connect?: ticketsWhereUniqueInput
  }

  export type tripsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: tripsCreateOrConnectWithoutBookingsInput
    connect?: tripsWhereUniqueInput
  }

  export type extrasUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<extrasCreateWithoutBookingsInput, extrasUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: extrasCreateOrConnectWithoutBookingsInput
    upsert?: extrasUpsertWithoutBookingsInput
    disconnect?: extrasWhereInput | boolean
    delete?: extrasWhereInput | boolean
    connect?: extrasWhereUniqueInput
    update?: XOR<XOR<extrasUpdateToOneWithWhereWithoutBookingsInput, extrasUpdateWithoutBookingsInput>, extrasUncheckedUpdateWithoutBookingsInput>
  }

  export type seatsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<seatsCreateWithoutBookingsInput, seatsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: seatsCreateOrConnectWithoutBookingsInput
    upsert?: seatsUpsertWithoutBookingsInput
    disconnect?: seatsWhereInput | boolean
    delete?: seatsWhereInput | boolean
    connect?: seatsWhereUniqueInput
    update?: XOR<XOR<seatsUpdateToOneWithWhereWithoutBookingsInput, seatsUpdateWithoutBookingsInput>, seatsUncheckedUpdateWithoutBookingsInput>
  }

  export type ticketsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<ticketsCreateWithoutBookingsInput, ticketsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ticketsCreateOrConnectWithoutBookingsInput
    upsert?: ticketsUpsertWithoutBookingsInput
    disconnect?: ticketsWhereInput | boolean
    delete?: ticketsWhereInput | boolean
    connect?: ticketsWhereUniqueInput
    update?: XOR<XOR<ticketsUpdateToOneWithWhereWithoutBookingsInput, ticketsUpdateWithoutBookingsInput>, ticketsUncheckedUpdateWithoutBookingsInput>
  }

  export type tripsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: tripsCreateOrConnectWithoutBookingsInput
    upsert?: tripsUpsertWithoutBookingsInput
    disconnect?: tripsWhereInput | boolean
    delete?: tripsWhereInput | boolean
    connect?: tripsWhereUniqueInput
    update?: XOR<XOR<tripsUpdateToOneWithWhereWithoutBookingsInput, tripsUpdateWithoutBookingsInput>, tripsUncheckedUpdateWithoutBookingsInput>
  }

  export type bookingsCreateNestedManyWithoutExtrasInput = {
    create?: XOR<bookingsCreateWithoutExtrasInput, bookingsUncheckedCreateWithoutExtrasInput> | bookingsCreateWithoutExtrasInput[] | bookingsUncheckedCreateWithoutExtrasInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutExtrasInput | bookingsCreateOrConnectWithoutExtrasInput[]
    createMany?: bookingsCreateManyExtrasInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutExtrasInput = {
    create?: XOR<bookingsCreateWithoutExtrasInput, bookingsUncheckedCreateWithoutExtrasInput> | bookingsCreateWithoutExtrasInput[] | bookingsUncheckedCreateWithoutExtrasInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutExtrasInput | bookingsCreateOrConnectWithoutExtrasInput[]
    createMany?: bookingsCreateManyExtrasInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookingsUpdateManyWithoutExtrasNestedInput = {
    create?: XOR<bookingsCreateWithoutExtrasInput, bookingsUncheckedCreateWithoutExtrasInput> | bookingsCreateWithoutExtrasInput[] | bookingsUncheckedCreateWithoutExtrasInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutExtrasInput | bookingsCreateOrConnectWithoutExtrasInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutExtrasInput | bookingsUpsertWithWhereUniqueWithoutExtrasInput[]
    createMany?: bookingsCreateManyExtrasInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutExtrasInput | bookingsUpdateWithWhereUniqueWithoutExtrasInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutExtrasInput | bookingsUpdateManyWithWhereWithoutExtrasInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutExtrasNestedInput = {
    create?: XOR<bookingsCreateWithoutExtrasInput, bookingsUncheckedCreateWithoutExtrasInput> | bookingsCreateWithoutExtrasInput[] | bookingsUncheckedCreateWithoutExtrasInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutExtrasInput | bookingsCreateOrConnectWithoutExtrasInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutExtrasInput | bookingsUpsertWithWhereUniqueWithoutExtrasInput[]
    createMany?: bookingsCreateManyExtrasInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutExtrasInput | bookingsUpdateWithWhereUniqueWithoutExtrasInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutExtrasInput | bookingsUpdateManyWithWhereWithoutExtrasInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type aircraftsCreateNestedOneWithoutFlightsInput = {
    create?: XOR<aircraftsCreateWithoutFlightsInput, aircraftsUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: aircraftsCreateOrConnectWithoutFlightsInput
    connect?: aircraftsWhereUniqueInput
  }

  export type routesCreateNestedOneWithoutFlightsInput = {
    create?: XOR<routesCreateWithoutFlightsInput, routesUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: routesCreateOrConnectWithoutFlightsInput
    connect?: routesWhereUniqueInput
  }

  export type ticketsCreateNestedManyWithoutFlightsInput = {
    create?: XOR<ticketsCreateWithoutFlightsInput, ticketsUncheckedCreateWithoutFlightsInput> | ticketsCreateWithoutFlightsInput[] | ticketsUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutFlightsInput | ticketsCreateOrConnectWithoutFlightsInput[]
    createMany?: ticketsCreateManyFlightsInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type ticketsUncheckedCreateNestedManyWithoutFlightsInput = {
    create?: XOR<ticketsCreateWithoutFlightsInput, ticketsUncheckedCreateWithoutFlightsInput> | ticketsCreateWithoutFlightsInput[] | ticketsUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutFlightsInput | ticketsCreateOrConnectWithoutFlightsInput[]
    createMany?: ticketsCreateManyFlightsInputEnvelope
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type aircraftsUpdateOneWithoutFlightsNestedInput = {
    create?: XOR<aircraftsCreateWithoutFlightsInput, aircraftsUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: aircraftsCreateOrConnectWithoutFlightsInput
    upsert?: aircraftsUpsertWithoutFlightsInput
    disconnect?: aircraftsWhereInput | boolean
    delete?: aircraftsWhereInput | boolean
    connect?: aircraftsWhereUniqueInput
    update?: XOR<XOR<aircraftsUpdateToOneWithWhereWithoutFlightsInput, aircraftsUpdateWithoutFlightsInput>, aircraftsUncheckedUpdateWithoutFlightsInput>
  }

  export type routesUpdateOneWithoutFlightsNestedInput = {
    create?: XOR<routesCreateWithoutFlightsInput, routesUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: routesCreateOrConnectWithoutFlightsInput
    upsert?: routesUpsertWithoutFlightsInput
    disconnect?: routesWhereInput | boolean
    delete?: routesWhereInput | boolean
    connect?: routesWhereUniqueInput
    update?: XOR<XOR<routesUpdateToOneWithWhereWithoutFlightsInput, routesUpdateWithoutFlightsInput>, routesUncheckedUpdateWithoutFlightsInput>
  }

  export type ticketsUpdateManyWithoutFlightsNestedInput = {
    create?: XOR<ticketsCreateWithoutFlightsInput, ticketsUncheckedCreateWithoutFlightsInput> | ticketsCreateWithoutFlightsInput[] | ticketsUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutFlightsInput | ticketsCreateOrConnectWithoutFlightsInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutFlightsInput | ticketsUpsertWithWhereUniqueWithoutFlightsInput[]
    createMany?: ticketsCreateManyFlightsInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutFlightsInput | ticketsUpdateWithWhereUniqueWithoutFlightsInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutFlightsInput | ticketsUpdateManyWithWhereWithoutFlightsInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type ticketsUncheckedUpdateManyWithoutFlightsNestedInput = {
    create?: XOR<ticketsCreateWithoutFlightsInput, ticketsUncheckedCreateWithoutFlightsInput> | ticketsCreateWithoutFlightsInput[] | ticketsUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: ticketsCreateOrConnectWithoutFlightsInput | ticketsCreateOrConnectWithoutFlightsInput[]
    upsert?: ticketsUpsertWithWhereUniqueWithoutFlightsInput | ticketsUpsertWithWhereUniqueWithoutFlightsInput[]
    createMany?: ticketsCreateManyFlightsInputEnvelope
    set?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    disconnect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    delete?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    connect?: ticketsWhereUniqueInput | ticketsWhereUniqueInput[]
    update?: ticketsUpdateWithWhereUniqueWithoutFlightsInput | ticketsUpdateWithWhereUniqueWithoutFlightsInput[]
    updateMany?: ticketsUpdateManyWithWhereWithoutFlightsInput | ticketsUpdateManyWithWhereWithoutFlightsInput[]
    deleteMany?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
  }

  export type flightsCreateNestedManyWithoutRoutesInput = {
    create?: XOR<flightsCreateWithoutRoutesInput, flightsUncheckedCreateWithoutRoutesInput> | flightsCreateWithoutRoutesInput[] | flightsUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutRoutesInput | flightsCreateOrConnectWithoutRoutesInput[]
    createMany?: flightsCreateManyRoutesInputEnvelope
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
  }

  export type airportsCreateNestedOneWithoutRoutes_routes_departureToairportsInput = {
    create?: XOR<airportsCreateWithoutRoutes_routes_departureToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_departureToairportsInput>
    connectOrCreate?: airportsCreateOrConnectWithoutRoutes_routes_departureToairportsInput
    connect?: airportsWhereUniqueInput
  }

  export type airportsCreateNestedOneWithoutRoutes_routes_destinationToairportsInput = {
    create?: XOR<airportsCreateWithoutRoutes_routes_destinationToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_destinationToairportsInput>
    connectOrCreate?: airportsCreateOrConnectWithoutRoutes_routes_destinationToairportsInput
    connect?: airportsWhereUniqueInput
  }

  export type usesCreateNestedManyWithoutRoutesInput = {
    create?: XOR<usesCreateWithoutRoutesInput, usesUncheckedCreateWithoutRoutesInput> | usesCreateWithoutRoutesInput[] | usesUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutRoutesInput | usesCreateOrConnectWithoutRoutesInput[]
    createMany?: usesCreateManyRoutesInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type flightsUncheckedCreateNestedManyWithoutRoutesInput = {
    create?: XOR<flightsCreateWithoutRoutesInput, flightsUncheckedCreateWithoutRoutesInput> | flightsCreateWithoutRoutesInput[] | flightsUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutRoutesInput | flightsCreateOrConnectWithoutRoutesInput[]
    createMany?: flightsCreateManyRoutesInputEnvelope
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
  }

  export type usesUncheckedCreateNestedManyWithoutRoutesInput = {
    create?: XOR<usesCreateWithoutRoutesInput, usesUncheckedCreateWithoutRoutesInput> | usesCreateWithoutRoutesInput[] | usesUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutRoutesInput | usesCreateOrConnectWithoutRoutesInput[]
    createMany?: usesCreateManyRoutesInputEnvelope
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
  }

  export type flightsUpdateManyWithoutRoutesNestedInput = {
    create?: XOR<flightsCreateWithoutRoutesInput, flightsUncheckedCreateWithoutRoutesInput> | flightsCreateWithoutRoutesInput[] | flightsUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutRoutesInput | flightsCreateOrConnectWithoutRoutesInput[]
    upsert?: flightsUpsertWithWhereUniqueWithoutRoutesInput | flightsUpsertWithWhereUniqueWithoutRoutesInput[]
    createMany?: flightsCreateManyRoutesInputEnvelope
    set?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    disconnect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    delete?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    update?: flightsUpdateWithWhereUniqueWithoutRoutesInput | flightsUpdateWithWhereUniqueWithoutRoutesInput[]
    updateMany?: flightsUpdateManyWithWhereWithoutRoutesInput | flightsUpdateManyWithWhereWithoutRoutesInput[]
    deleteMany?: flightsScalarWhereInput | flightsScalarWhereInput[]
  }

  export type airportsUpdateOneRequiredWithoutRoutes_routes_departureToairportsNestedInput = {
    create?: XOR<airportsCreateWithoutRoutes_routes_departureToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_departureToairportsInput>
    connectOrCreate?: airportsCreateOrConnectWithoutRoutes_routes_departureToairportsInput
    upsert?: airportsUpsertWithoutRoutes_routes_departureToairportsInput
    connect?: airportsWhereUniqueInput
    update?: XOR<XOR<airportsUpdateToOneWithWhereWithoutRoutes_routes_departureToairportsInput, airportsUpdateWithoutRoutes_routes_departureToairportsInput>, airportsUncheckedUpdateWithoutRoutes_routes_departureToairportsInput>
  }

  export type airportsUpdateOneRequiredWithoutRoutes_routes_destinationToairportsNestedInput = {
    create?: XOR<airportsCreateWithoutRoutes_routes_destinationToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_destinationToairportsInput>
    connectOrCreate?: airportsCreateOrConnectWithoutRoutes_routes_destinationToairportsInput
    upsert?: airportsUpsertWithoutRoutes_routes_destinationToairportsInput
    connect?: airportsWhereUniqueInput
    update?: XOR<XOR<airportsUpdateToOneWithWhereWithoutRoutes_routes_destinationToairportsInput, airportsUpdateWithoutRoutes_routes_destinationToairportsInput>, airportsUncheckedUpdateWithoutRoutes_routes_destinationToairportsInput>
  }

  export type usesUpdateManyWithoutRoutesNestedInput = {
    create?: XOR<usesCreateWithoutRoutesInput, usesUncheckedCreateWithoutRoutesInput> | usesCreateWithoutRoutesInput[] | usesUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutRoutesInput | usesCreateOrConnectWithoutRoutesInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutRoutesInput | usesUpsertWithWhereUniqueWithoutRoutesInput[]
    createMany?: usesCreateManyRoutesInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutRoutesInput | usesUpdateWithWhereUniqueWithoutRoutesInput[]
    updateMany?: usesUpdateManyWithWhereWithoutRoutesInput | usesUpdateManyWithWhereWithoutRoutesInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type flightsUncheckedUpdateManyWithoutRoutesNestedInput = {
    create?: XOR<flightsCreateWithoutRoutesInput, flightsUncheckedCreateWithoutRoutesInput> | flightsCreateWithoutRoutesInput[] | flightsUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: flightsCreateOrConnectWithoutRoutesInput | flightsCreateOrConnectWithoutRoutesInput[]
    upsert?: flightsUpsertWithWhereUniqueWithoutRoutesInput | flightsUpsertWithWhereUniqueWithoutRoutesInput[]
    createMany?: flightsCreateManyRoutesInputEnvelope
    set?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    disconnect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    delete?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    connect?: flightsWhereUniqueInput | flightsWhereUniqueInput[]
    update?: flightsUpdateWithWhereUniqueWithoutRoutesInput | flightsUpdateWithWhereUniqueWithoutRoutesInput[]
    updateMany?: flightsUpdateManyWithWhereWithoutRoutesInput | flightsUpdateManyWithWhereWithoutRoutesInput[]
    deleteMany?: flightsScalarWhereInput | flightsScalarWhereInput[]
  }

  export type usesUncheckedUpdateManyWithoutRoutesNestedInput = {
    create?: XOR<usesCreateWithoutRoutesInput, usesUncheckedCreateWithoutRoutesInput> | usesCreateWithoutRoutesInput[] | usesUncheckedCreateWithoutRoutesInput[]
    connectOrCreate?: usesCreateOrConnectWithoutRoutesInput | usesCreateOrConnectWithoutRoutesInput[]
    upsert?: usesUpsertWithWhereUniqueWithoutRoutesInput | usesUpsertWithWhereUniqueWithoutRoutesInput[]
    createMany?: usesCreateManyRoutesInputEnvelope
    set?: usesWhereUniqueInput | usesWhereUniqueInput[]
    disconnect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    delete?: usesWhereUniqueInput | usesWhereUniqueInput[]
    connect?: usesWhereUniqueInput | usesWhereUniqueInput[]
    update?: usesUpdateWithWhereUniqueWithoutRoutesInput | usesUpdateWithWhereUniqueWithoutRoutesInput[]
    updateMany?: usesUpdateManyWithWhereWithoutRoutesInput | usesUpdateManyWithWhereWithoutRoutesInput[]
    deleteMany?: usesScalarWhereInput | usesScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutSeatsInput = {
    create?: XOR<bookingsCreateWithoutSeatsInput, bookingsUncheckedCreateWithoutSeatsInput> | bookingsCreateWithoutSeatsInput[] | bookingsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSeatsInput | bookingsCreateOrConnectWithoutSeatsInput[]
    createMany?: bookingsCreateManySeatsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type aircraftsCreateNestedOneWithoutSeatsInput = {
    create?: XOR<aircraftsCreateWithoutSeatsInput, aircraftsUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: aircraftsCreateOrConnectWithoutSeatsInput
    connect?: aircraftsWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutSeatsInput = {
    create?: XOR<bookingsCreateWithoutSeatsInput, bookingsUncheckedCreateWithoutSeatsInput> | bookingsCreateWithoutSeatsInput[] | bookingsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSeatsInput | bookingsCreateOrConnectWithoutSeatsInput[]
    createMany?: bookingsCreateManySeatsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutSeatsNestedInput = {
    create?: XOR<bookingsCreateWithoutSeatsInput, bookingsUncheckedCreateWithoutSeatsInput> | bookingsCreateWithoutSeatsInput[] | bookingsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSeatsInput | bookingsCreateOrConnectWithoutSeatsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutSeatsInput | bookingsUpsertWithWhereUniqueWithoutSeatsInput[]
    createMany?: bookingsCreateManySeatsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutSeatsInput | bookingsUpdateWithWhereUniqueWithoutSeatsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutSeatsInput | bookingsUpdateManyWithWhereWithoutSeatsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type aircraftsUpdateOneWithoutSeatsNestedInput = {
    create?: XOR<aircraftsCreateWithoutSeatsInput, aircraftsUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: aircraftsCreateOrConnectWithoutSeatsInput
    upsert?: aircraftsUpsertWithoutSeatsInput
    disconnect?: aircraftsWhereInput | boolean
    delete?: aircraftsWhereInput | boolean
    connect?: aircraftsWhereUniqueInput
    update?: XOR<XOR<aircraftsUpdateToOneWithWhereWithoutSeatsInput, aircraftsUpdateWithoutSeatsInput>, aircraftsUncheckedUpdateWithoutSeatsInput>
  }

  export type bookingsUncheckedUpdateManyWithoutSeatsNestedInput = {
    create?: XOR<bookingsCreateWithoutSeatsInput, bookingsUncheckedCreateWithoutSeatsInput> | bookingsCreateWithoutSeatsInput[] | bookingsUncheckedCreateWithoutSeatsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutSeatsInput | bookingsCreateOrConnectWithoutSeatsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutSeatsInput | bookingsUpsertWithWhereUniqueWithoutSeatsInput[]
    createMany?: bookingsCreateManySeatsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutSeatsInput | bookingsUpdateWithWhereUniqueWithoutSeatsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutSeatsInput | bookingsUpdateManyWithWhereWithoutSeatsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutTicketsInput = {
    create?: XOR<bookingsCreateWithoutTicketsInput, bookingsUncheckedCreateWithoutTicketsInput> | bookingsCreateWithoutTicketsInput[] | bookingsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTicketsInput | bookingsCreateOrConnectWithoutTicketsInput[]
    createMany?: bookingsCreateManyTicketsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type flightsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<flightsCreateWithoutTicketsInput, flightsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: flightsCreateOrConnectWithoutTicketsInput
    connect?: flightsWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutTicketsInput = {
    create?: XOR<bookingsCreateWithoutTicketsInput, bookingsUncheckedCreateWithoutTicketsInput> | bookingsCreateWithoutTicketsInput[] | bookingsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTicketsInput | bookingsCreateOrConnectWithoutTicketsInput[]
    createMany?: bookingsCreateManyTicketsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<bookingsCreateWithoutTicketsInput, bookingsUncheckedCreateWithoutTicketsInput> | bookingsCreateWithoutTicketsInput[] | bookingsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTicketsInput | bookingsCreateOrConnectWithoutTicketsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTicketsInput | bookingsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: bookingsCreateManyTicketsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTicketsInput | bookingsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTicketsInput | bookingsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type flightsUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<flightsCreateWithoutTicketsInput, flightsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: flightsCreateOrConnectWithoutTicketsInput
    upsert?: flightsUpsertWithoutTicketsInput
    disconnect?: flightsWhereInput | boolean
    delete?: flightsWhereInput | boolean
    connect?: flightsWhereUniqueInput
    update?: XOR<XOR<flightsUpdateToOneWithWhereWithoutTicketsInput, flightsUpdateWithoutTicketsInput>, flightsUncheckedUpdateWithoutTicketsInput>
  }

  export type bookingsUncheckedUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<bookingsCreateWithoutTicketsInput, bookingsUncheckedCreateWithoutTicketsInput> | bookingsCreateWithoutTicketsInput[] | bookingsUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTicketsInput | bookingsCreateOrConnectWithoutTicketsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTicketsInput | bookingsUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: bookingsCreateManyTicketsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTicketsInput | bookingsUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTicketsInput | bookingsUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutTripsInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTripsInput = {
    create?: XOR<usersCreateWithoutTripsInput, usersUncheckedCreateWithoutTripsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTripsInput
    connect?: usersWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutTripsInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutTripsNestedInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTripsInput | bookingsUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTripsInput | bookingsUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTripsInput | bookingsUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutTripsNestedInput = {
    create?: XOR<usersCreateWithoutTripsInput, usersUncheckedCreateWithoutTripsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTripsInput
    upsert?: usersUpsertWithoutTripsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTripsInput, usersUpdateWithoutTripsInput>, usersUncheckedUpdateWithoutTripsInput>
  }

  export type bookingsUncheckedUpdateManyWithoutTripsNestedInput = {
    create?: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput> | bookingsCreateWithoutTripsInput[] | bookingsUncheckedCreateWithoutTripsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutTripsInput | bookingsCreateOrConnectWithoutTripsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutTripsInput | bookingsUpsertWithWhereUniqueWithoutTripsInput[]
    createMany?: bookingsCreateManyTripsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutTripsInput | bookingsUpdateWithWhereUniqueWithoutTripsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutTripsInput | bookingsUpdateManyWithWhereWithoutTripsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type tripsCreateNestedManyWithoutUsersInput = {
    create?: XOR<tripsCreateWithoutUsersInput, tripsUncheckedCreateWithoutUsersInput> | tripsCreateWithoutUsersInput[] | tripsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tripsCreateOrConnectWithoutUsersInput | tripsCreateOrConnectWithoutUsersInput[]
    createMany?: tripsCreateManyUsersInputEnvelope
    connect?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
  }

  export type tripsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<tripsCreateWithoutUsersInput, tripsUncheckedCreateWithoutUsersInput> | tripsCreateWithoutUsersInput[] | tripsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tripsCreateOrConnectWithoutUsersInput | tripsCreateOrConnectWithoutUsersInput[]
    createMany?: tripsCreateManyUsersInputEnvelope
    connect?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
  }

  export type tripsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tripsCreateWithoutUsersInput, tripsUncheckedCreateWithoutUsersInput> | tripsCreateWithoutUsersInput[] | tripsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tripsCreateOrConnectWithoutUsersInput | tripsCreateOrConnectWithoutUsersInput[]
    upsert?: tripsUpsertWithWhereUniqueWithoutUsersInput | tripsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tripsCreateManyUsersInputEnvelope
    set?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    disconnect?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    delete?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    connect?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    update?: tripsUpdateWithWhereUniqueWithoutUsersInput | tripsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tripsUpdateManyWithWhereWithoutUsersInput | tripsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tripsScalarWhereInput | tripsScalarWhereInput[]
  }

  export type tripsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tripsCreateWithoutUsersInput, tripsUncheckedCreateWithoutUsersInput> | tripsCreateWithoutUsersInput[] | tripsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tripsCreateOrConnectWithoutUsersInput | tripsCreateOrConnectWithoutUsersInput[]
    upsert?: tripsUpsertWithWhereUniqueWithoutUsersInput | tripsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tripsCreateManyUsersInputEnvelope
    set?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    disconnect?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    delete?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    connect?: tripsWhereUniqueInput | tripsWhereUniqueInput[]
    update?: tripsUpdateWithWhereUniqueWithoutUsersInput | tripsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tripsUpdateManyWithWhereWithoutUsersInput | tripsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tripsScalarWhereInput | tripsScalarWhereInput[]
  }

  export type airlinesCreateNestedOneWithoutUsesInput = {
    create?: XOR<airlinesCreateWithoutUsesInput, airlinesUncheckedCreateWithoutUsesInput>
    connectOrCreate?: airlinesCreateOrConnectWithoutUsesInput
    connect?: airlinesWhereUniqueInput
  }

  export type routesCreateNestedOneWithoutUsesInput = {
    create?: XOR<routesCreateWithoutUsesInput, routesUncheckedCreateWithoutUsesInput>
    connectOrCreate?: routesCreateOrConnectWithoutUsesInput
    connect?: routesWhereUniqueInput
  }

  export type airlinesUpdateOneWithoutUsesNestedInput = {
    create?: XOR<airlinesCreateWithoutUsesInput, airlinesUncheckedCreateWithoutUsesInput>
    connectOrCreate?: airlinesCreateOrConnectWithoutUsesInput
    upsert?: airlinesUpsertWithoutUsesInput
    disconnect?: airlinesWhereInput | boolean
    delete?: airlinesWhereInput | boolean
    connect?: airlinesWhereUniqueInput
    update?: XOR<XOR<airlinesUpdateToOneWithWhereWithoutUsesInput, airlinesUpdateWithoutUsesInput>, airlinesUncheckedUpdateWithoutUsesInput>
  }

  export type routesUpdateOneWithoutUsesNestedInput = {
    create?: XOR<routesCreateWithoutUsesInput, routesUncheckedCreateWithoutUsesInput>
    connectOrCreate?: routesCreateOrConnectWithoutUsesInput
    upsert?: routesUpsertWithoutUsesInput
    disconnect?: routesWhereInput | boolean
    delete?: routesWhereInput | boolean
    connect?: routesWhereUniqueInput
    update?: XOR<XOR<routesUpdateToOneWithWhereWithoutUsesInput, routesUpdateWithoutUsesInput>, routesUncheckedUpdateWithoutUsesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type airlinesCreateWithoutAircraftsInput = {
    name: string
    password: string
    country: string
    motto?: string | null
    uses?: usesCreateNestedManyWithoutAirlinesInput
  }

  export type airlinesUncheckedCreateWithoutAircraftsInput = {
    name: string
    password: string
    country: string
    motto?: string | null
    uses?: usesUncheckedCreateNestedManyWithoutAirlinesInput
  }

  export type airlinesCreateOrConnectWithoutAircraftsInput = {
    where: airlinesWhereUniqueInput
    create: XOR<airlinesCreateWithoutAircraftsInput, airlinesUncheckedCreateWithoutAircraftsInput>
  }

  export type flightsCreateWithoutAircraftsInput = {
    code?: string
    duration?: number | null
    liftoff_date?: Date | string | null
    routes?: routesCreateNestedOneWithoutFlightsInput
    tickets?: ticketsCreateNestedManyWithoutFlightsInput
  }

  export type flightsUncheckedCreateWithoutAircraftsInput = {
    code?: string
    duration?: number | null
    liftoff_date?: Date | string | null
    route_departure?: number | null
    route_destination?: number | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type flightsCreateOrConnectWithoutAircraftsInput = {
    where: flightsWhereUniqueInput
    create: XOR<flightsCreateWithoutAircraftsInput, flightsUncheckedCreateWithoutAircraftsInput>
  }

  export type flightsCreateManyAircraftsInputEnvelope = {
    data: flightsCreateManyAircraftsInput | flightsCreateManyAircraftsInput[]
    skipDuplicates?: boolean
  }

  export type seatsCreateWithoutAircraftsInput = {
    postion?: string | null
    bookings?: bookingsCreateNestedManyWithoutSeatsInput
  }

  export type seatsUncheckedCreateWithoutAircraftsInput = {
    id?: number
    postion?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutSeatsInput
  }

  export type seatsCreateOrConnectWithoutAircraftsInput = {
    where: seatsWhereUniqueInput
    create: XOR<seatsCreateWithoutAircraftsInput, seatsUncheckedCreateWithoutAircraftsInput>
  }

  export type seatsCreateManyAircraftsInputEnvelope = {
    data: seatsCreateManyAircraftsInput | seatsCreateManyAircraftsInput[]
    skipDuplicates?: boolean
  }

  export type airlinesUpsertWithoutAircraftsInput = {
    update: XOR<airlinesUpdateWithoutAircraftsInput, airlinesUncheckedUpdateWithoutAircraftsInput>
    create: XOR<airlinesCreateWithoutAircraftsInput, airlinesUncheckedCreateWithoutAircraftsInput>
    where?: airlinesWhereInput
  }

  export type airlinesUpdateToOneWithWhereWithoutAircraftsInput = {
    where?: airlinesWhereInput
    data: XOR<airlinesUpdateWithoutAircraftsInput, airlinesUncheckedUpdateWithoutAircraftsInput>
  }

  export type airlinesUpdateWithoutAircraftsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    uses?: usesUpdateManyWithoutAirlinesNestedInput
  }

  export type airlinesUncheckedUpdateWithoutAircraftsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    uses?: usesUncheckedUpdateManyWithoutAirlinesNestedInput
  }

  export type flightsUpsertWithWhereUniqueWithoutAircraftsInput = {
    where: flightsWhereUniqueInput
    update: XOR<flightsUpdateWithoutAircraftsInput, flightsUncheckedUpdateWithoutAircraftsInput>
    create: XOR<flightsCreateWithoutAircraftsInput, flightsUncheckedCreateWithoutAircraftsInput>
  }

  export type flightsUpdateWithWhereUniqueWithoutAircraftsInput = {
    where: flightsWhereUniqueInput
    data: XOR<flightsUpdateWithoutAircraftsInput, flightsUncheckedUpdateWithoutAircraftsInput>
  }

  export type flightsUpdateManyWithWhereWithoutAircraftsInput = {
    where: flightsScalarWhereInput
    data: XOR<flightsUpdateManyMutationInput, flightsUncheckedUpdateManyWithoutAircraftsInput>
  }

  export type flightsScalarWhereInput = {
    AND?: flightsScalarWhereInput | flightsScalarWhereInput[]
    OR?: flightsScalarWhereInput[]
    NOT?: flightsScalarWhereInput | flightsScalarWhereInput[]
    code?: UuidFilter<"flights"> | string
    duration?: IntNullableFilter<"flights"> | number | null
    aircraft_id?: IntNullableFilter<"flights"> | number | null
    liftoff_date?: DateTimeNullableFilter<"flights"> | Date | string | null
    route_departure?: IntNullableFilter<"flights"> | number | null
    route_destination?: IntNullableFilter<"flights"> | number | null
  }

  export type seatsUpsertWithWhereUniqueWithoutAircraftsInput = {
    where: seatsWhereUniqueInput
    update: XOR<seatsUpdateWithoutAircraftsInput, seatsUncheckedUpdateWithoutAircraftsInput>
    create: XOR<seatsCreateWithoutAircraftsInput, seatsUncheckedCreateWithoutAircraftsInput>
  }

  export type seatsUpdateWithWhereUniqueWithoutAircraftsInput = {
    where: seatsWhereUniqueInput
    data: XOR<seatsUpdateWithoutAircraftsInput, seatsUncheckedUpdateWithoutAircraftsInput>
  }

  export type seatsUpdateManyWithWhereWithoutAircraftsInput = {
    where: seatsScalarWhereInput
    data: XOR<seatsUpdateManyMutationInput, seatsUncheckedUpdateManyWithoutAircraftsInput>
  }

  export type seatsScalarWhereInput = {
    AND?: seatsScalarWhereInput | seatsScalarWhereInput[]
    OR?: seatsScalarWhereInput[]
    NOT?: seatsScalarWhereInput | seatsScalarWhereInput[]
    id?: IntFilter<"seats"> | number
    postion?: StringNullableFilter<"seats"> | string | null
    aircraft_id?: IntNullableFilter<"seats"> | number | null
  }

  export type aircraftsCreateWithoutAirlinesInput = {
    model?: string | null
    seats_capacity?: number | null
    flights?: flightsCreateNestedManyWithoutAircraftsInput
    seats?: seatsCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsUncheckedCreateWithoutAirlinesInput = {
    id?: number
    model?: string | null
    seats_capacity?: number | null
    flights?: flightsUncheckedCreateNestedManyWithoutAircraftsInput
    seats?: seatsUncheckedCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsCreateOrConnectWithoutAirlinesInput = {
    where: aircraftsWhereUniqueInput
    create: XOR<aircraftsCreateWithoutAirlinesInput, aircraftsUncheckedCreateWithoutAirlinesInput>
  }

  export type aircraftsCreateManyAirlinesInputEnvelope = {
    data: aircraftsCreateManyAirlinesInput | aircraftsCreateManyAirlinesInput[]
    skipDuplicates?: boolean
  }

  export type usesCreateWithoutAirlinesInput = {
    routes?: routesCreateNestedOneWithoutUsesInput
  }

  export type usesUncheckedCreateWithoutAirlinesInput = {
    id?: number
    route_departure?: number | null
    route_destination?: number | null
  }

  export type usesCreateOrConnectWithoutAirlinesInput = {
    where: usesWhereUniqueInput
    create: XOR<usesCreateWithoutAirlinesInput, usesUncheckedCreateWithoutAirlinesInput>
  }

  export type usesCreateManyAirlinesInputEnvelope = {
    data: usesCreateManyAirlinesInput | usesCreateManyAirlinesInput[]
    skipDuplicates?: boolean
  }

  export type aircraftsUpsertWithWhereUniqueWithoutAirlinesInput = {
    where: aircraftsWhereUniqueInput
    update: XOR<aircraftsUpdateWithoutAirlinesInput, aircraftsUncheckedUpdateWithoutAirlinesInput>
    create: XOR<aircraftsCreateWithoutAirlinesInput, aircraftsUncheckedCreateWithoutAirlinesInput>
  }

  export type aircraftsUpdateWithWhereUniqueWithoutAirlinesInput = {
    where: aircraftsWhereUniqueInput
    data: XOR<aircraftsUpdateWithoutAirlinesInput, aircraftsUncheckedUpdateWithoutAirlinesInput>
  }

  export type aircraftsUpdateManyWithWhereWithoutAirlinesInput = {
    where: aircraftsScalarWhereInput
    data: XOR<aircraftsUpdateManyMutationInput, aircraftsUncheckedUpdateManyWithoutAirlinesInput>
  }

  export type aircraftsScalarWhereInput = {
    AND?: aircraftsScalarWhereInput | aircraftsScalarWhereInput[]
    OR?: aircraftsScalarWhereInput[]
    NOT?: aircraftsScalarWhereInput | aircraftsScalarWhereInput[]
    id?: IntFilter<"aircrafts"> | number
    model?: StringNullableFilter<"aircrafts"> | string | null
    seats_capacity?: IntNullableFilter<"aircrafts"> | number | null
    owner_name?: StringFilter<"aircrafts"> | string
  }

  export type usesUpsertWithWhereUniqueWithoutAirlinesInput = {
    where: usesWhereUniqueInput
    update: XOR<usesUpdateWithoutAirlinesInput, usesUncheckedUpdateWithoutAirlinesInput>
    create: XOR<usesCreateWithoutAirlinesInput, usesUncheckedCreateWithoutAirlinesInput>
  }

  export type usesUpdateWithWhereUniqueWithoutAirlinesInput = {
    where: usesWhereUniqueInput
    data: XOR<usesUpdateWithoutAirlinesInput, usesUncheckedUpdateWithoutAirlinesInput>
  }

  export type usesUpdateManyWithWhereWithoutAirlinesInput = {
    where: usesScalarWhereInput
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyWithoutAirlinesInput>
  }

  export type usesScalarWhereInput = {
    AND?: usesScalarWhereInput | usesScalarWhereInput[]
    OR?: usesScalarWhereInput[]
    NOT?: usesScalarWhereInput | usesScalarWhereInput[]
    id?: IntFilter<"uses"> | number
    airline_name?: StringNullableFilter<"uses"> | string | null
    route_departure?: IntNullableFilter<"uses"> | number | null
    route_destination?: IntNullableFilter<"uses"> | number | null
  }

  export type routesCreateWithoutAirports_routes_departureToairportsInput = {
    flights?: flightsCreateNestedManyWithoutRoutesInput
    airports_routes_destinationToairports: airportsCreateNestedOneWithoutRoutes_routes_destinationToairportsInput
    uses?: usesCreateNestedManyWithoutRoutesInput
  }

  export type routesUncheckedCreateWithoutAirports_routes_departureToairportsInput = {
    destination: number
    flights?: flightsUncheckedCreateNestedManyWithoutRoutesInput
    uses?: usesUncheckedCreateNestedManyWithoutRoutesInput
  }

  export type routesCreateOrConnectWithoutAirports_routes_departureToairportsInput = {
    where: routesWhereUniqueInput
    create: XOR<routesCreateWithoutAirports_routes_departureToairportsInput, routesUncheckedCreateWithoutAirports_routes_departureToairportsInput>
  }

  export type routesCreateManyAirports_routes_departureToairportsInputEnvelope = {
    data: routesCreateManyAirports_routes_departureToairportsInput | routesCreateManyAirports_routes_departureToairportsInput[]
    skipDuplicates?: boolean
  }

  export type routesCreateWithoutAirports_routes_destinationToairportsInput = {
    flights?: flightsCreateNestedManyWithoutRoutesInput
    airports_routes_departureToairports: airportsCreateNestedOneWithoutRoutes_routes_departureToairportsInput
    uses?: usesCreateNestedManyWithoutRoutesInput
  }

  export type routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput = {
    departure: number
    flights?: flightsUncheckedCreateNestedManyWithoutRoutesInput
    uses?: usesUncheckedCreateNestedManyWithoutRoutesInput
  }

  export type routesCreateOrConnectWithoutAirports_routes_destinationToairportsInput = {
    where: routesWhereUniqueInput
    create: XOR<routesCreateWithoutAirports_routes_destinationToairportsInput, routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput>
  }

  export type routesCreateManyAirports_routes_destinationToairportsInputEnvelope = {
    data: routesCreateManyAirports_routes_destinationToairportsInput | routesCreateManyAirports_routes_destinationToairportsInput[]
    skipDuplicates?: boolean
  }

  export type routesUpsertWithWhereUniqueWithoutAirports_routes_departureToairportsInput = {
    where: routesWhereUniqueInput
    update: XOR<routesUpdateWithoutAirports_routes_departureToairportsInput, routesUncheckedUpdateWithoutAirports_routes_departureToairportsInput>
    create: XOR<routesCreateWithoutAirports_routes_departureToairportsInput, routesUncheckedCreateWithoutAirports_routes_departureToairportsInput>
  }

  export type routesUpdateWithWhereUniqueWithoutAirports_routes_departureToairportsInput = {
    where: routesWhereUniqueInput
    data: XOR<routesUpdateWithoutAirports_routes_departureToairportsInput, routesUncheckedUpdateWithoutAirports_routes_departureToairportsInput>
  }

  export type routesUpdateManyWithWhereWithoutAirports_routes_departureToairportsInput = {
    where: routesScalarWhereInput
    data: XOR<routesUpdateManyMutationInput, routesUncheckedUpdateManyWithoutAirports_routes_departureToairportsInput>
  }

  export type routesScalarWhereInput = {
    AND?: routesScalarWhereInput | routesScalarWhereInput[]
    OR?: routesScalarWhereInput[]
    NOT?: routesScalarWhereInput | routesScalarWhereInput[]
    departure?: IntFilter<"routes"> | number
    destination?: IntFilter<"routes"> | number
  }

  export type routesUpsertWithWhereUniqueWithoutAirports_routes_destinationToairportsInput = {
    where: routesWhereUniqueInput
    update: XOR<routesUpdateWithoutAirports_routes_destinationToairportsInput, routesUncheckedUpdateWithoutAirports_routes_destinationToairportsInput>
    create: XOR<routesCreateWithoutAirports_routes_destinationToairportsInput, routesUncheckedCreateWithoutAirports_routes_destinationToairportsInput>
  }

  export type routesUpdateWithWhereUniqueWithoutAirports_routes_destinationToairportsInput = {
    where: routesWhereUniqueInput
    data: XOR<routesUpdateWithoutAirports_routes_destinationToairportsInput, routesUncheckedUpdateWithoutAirports_routes_destinationToairportsInput>
  }

  export type routesUpdateManyWithWhereWithoutAirports_routes_destinationToairportsInput = {
    where: routesScalarWhereInput
    data: XOR<routesUpdateManyMutationInput, routesUncheckedUpdateManyWithoutAirports_routes_destinationToairportsInput>
  }

  export type extrasCreateWithoutBookingsInput = {
    description: string
    price?: number | null
  }

  export type extrasUncheckedCreateWithoutBookingsInput = {
    id?: number
    description: string
    price?: number | null
  }

  export type extrasCreateOrConnectWithoutBookingsInput = {
    where: extrasWhereUniqueInput
    create: XOR<extrasCreateWithoutBookingsInput, extrasUncheckedCreateWithoutBookingsInput>
  }

  export type seatsCreateWithoutBookingsInput = {
    postion?: string | null
    aircrafts?: aircraftsCreateNestedOneWithoutSeatsInput
  }

  export type seatsUncheckedCreateWithoutBookingsInput = {
    id?: number
    postion?: string | null
    aircraft_id?: number | null
  }

  export type seatsCreateOrConnectWithoutBookingsInput = {
    where: seatsWhereUniqueInput
    create: XOR<seatsCreateWithoutBookingsInput, seatsUncheckedCreateWithoutBookingsInput>
  }

  export type ticketsCreateWithoutBookingsInput = {
    code: string
    type?: string | null
    price?: number | null
    flights?: flightsCreateNestedOneWithoutTicketsInput
  }

  export type ticketsUncheckedCreateWithoutBookingsInput = {
    code: string
    type?: string | null
    price?: number | null
    fligt_code?: string | null
  }

  export type ticketsCreateOrConnectWithoutBookingsInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutBookingsInput, ticketsUncheckedCreateWithoutBookingsInput>
  }

  export type tripsCreateWithoutBookingsInput = {
    creation_date?: Date | string | null
    users?: usersCreateNestedOneWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutBookingsInput = {
    id?: number
    creation_date?: Date | string | null
    user_id?: number | null
  }

  export type tripsCreateOrConnectWithoutBookingsInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
  }

  export type extrasUpsertWithoutBookingsInput = {
    update: XOR<extrasUpdateWithoutBookingsInput, extrasUncheckedUpdateWithoutBookingsInput>
    create: XOR<extrasCreateWithoutBookingsInput, extrasUncheckedCreateWithoutBookingsInput>
    where?: extrasWhereInput
  }

  export type extrasUpdateToOneWithWhereWithoutBookingsInput = {
    where?: extrasWhereInput
    data: XOR<extrasUpdateWithoutBookingsInput, extrasUncheckedUpdateWithoutBookingsInput>
  }

  export type extrasUpdateWithoutBookingsInput = {
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type extrasUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type seatsUpsertWithoutBookingsInput = {
    update: XOR<seatsUpdateWithoutBookingsInput, seatsUncheckedUpdateWithoutBookingsInput>
    create: XOR<seatsCreateWithoutBookingsInput, seatsUncheckedCreateWithoutBookingsInput>
    where?: seatsWhereInput
  }

  export type seatsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: seatsWhereInput
    data: XOR<seatsUpdateWithoutBookingsInput, seatsUncheckedUpdateWithoutBookingsInput>
  }

  export type seatsUpdateWithoutBookingsInput = {
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    aircrafts?: aircraftsUpdateOneWithoutSeatsNestedInput
  }

  export type seatsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticketsUpsertWithoutBookingsInput = {
    update: XOR<ticketsUpdateWithoutBookingsInput, ticketsUncheckedUpdateWithoutBookingsInput>
    create: XOR<ticketsCreateWithoutBookingsInput, ticketsUncheckedCreateWithoutBookingsInput>
    where?: ticketsWhereInput
  }

  export type ticketsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ticketsWhereInput
    data: XOR<ticketsUpdateWithoutBookingsInput, ticketsUncheckedUpdateWithoutBookingsInput>
  }

  export type ticketsUpdateWithoutBookingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    flights?: flightsUpdateOneWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateWithoutBookingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    fligt_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tripsUpsertWithoutBookingsInput = {
    update: XOR<tripsUpdateWithoutBookingsInput, tripsUncheckedUpdateWithoutBookingsInput>
    create: XOR<tripsCreateWithoutBookingsInput, tripsUncheckedCreateWithoutBookingsInput>
    where?: tripsWhereInput
  }

  export type tripsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: tripsWhereInput
    data: XOR<tripsUpdateWithoutBookingsInput, tripsUncheckedUpdateWithoutBookingsInput>
  }

  export type tripsUpdateWithoutBookingsInput = {
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsCreateWithoutExtrasInput = {
    seats?: seatsCreateNestedOneWithoutBookingsInput
    tickets?: ticketsCreateNestedOneWithoutBookingsInput
    trips?: tripsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutExtrasInput = {
    id?: number
    ticket_code?: string | null
    seat_id?: number | null
    trip_id?: number | null
  }

  export type bookingsCreateOrConnectWithoutExtrasInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutExtrasInput, bookingsUncheckedCreateWithoutExtrasInput>
  }

  export type bookingsCreateManyExtrasInputEnvelope = {
    data: bookingsCreateManyExtrasInput | bookingsCreateManyExtrasInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutExtrasInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutExtrasInput, bookingsUncheckedUpdateWithoutExtrasInput>
    create: XOR<bookingsCreateWithoutExtrasInput, bookingsUncheckedCreateWithoutExtrasInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutExtrasInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutExtrasInput, bookingsUncheckedUpdateWithoutExtrasInput>
  }

  export type bookingsUpdateManyWithWhereWithoutExtrasInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutExtrasInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: IntFilter<"bookings"> | number
    ticket_code?: StringNullableFilter<"bookings"> | string | null
    seat_id?: IntNullableFilter<"bookings"> | number | null
    trip_id?: IntNullableFilter<"bookings"> | number | null
    extras_id?: IntNullableFilter<"bookings"> | number | null
  }

  export type aircraftsCreateWithoutFlightsInput = {
    model?: string | null
    seats_capacity?: number | null
    airlines: airlinesCreateNestedOneWithoutAircraftsInput
    seats?: seatsCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsUncheckedCreateWithoutFlightsInput = {
    id?: number
    model?: string | null
    seats_capacity?: number | null
    owner_name: string
    seats?: seatsUncheckedCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsCreateOrConnectWithoutFlightsInput = {
    where: aircraftsWhereUniqueInput
    create: XOR<aircraftsCreateWithoutFlightsInput, aircraftsUncheckedCreateWithoutFlightsInput>
  }

  export type routesCreateWithoutFlightsInput = {
    airports_routes_departureToairports: airportsCreateNestedOneWithoutRoutes_routes_departureToairportsInput
    airports_routes_destinationToairports: airportsCreateNestedOneWithoutRoutes_routes_destinationToairportsInput
    uses?: usesCreateNestedManyWithoutRoutesInput
  }

  export type routesUncheckedCreateWithoutFlightsInput = {
    departure: number
    destination: number
    uses?: usesUncheckedCreateNestedManyWithoutRoutesInput
  }

  export type routesCreateOrConnectWithoutFlightsInput = {
    where: routesWhereUniqueInput
    create: XOR<routesCreateWithoutFlightsInput, routesUncheckedCreateWithoutFlightsInput>
  }

  export type ticketsCreateWithoutFlightsInput = {
    code: string
    type?: string | null
    price?: number | null
    bookings?: bookingsCreateNestedManyWithoutTicketsInput
  }

  export type ticketsUncheckedCreateWithoutFlightsInput = {
    code: string
    type?: string | null
    price?: number | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type ticketsCreateOrConnectWithoutFlightsInput = {
    where: ticketsWhereUniqueInput
    create: XOR<ticketsCreateWithoutFlightsInput, ticketsUncheckedCreateWithoutFlightsInput>
  }

  export type ticketsCreateManyFlightsInputEnvelope = {
    data: ticketsCreateManyFlightsInput | ticketsCreateManyFlightsInput[]
    skipDuplicates?: boolean
  }

  export type aircraftsUpsertWithoutFlightsInput = {
    update: XOR<aircraftsUpdateWithoutFlightsInput, aircraftsUncheckedUpdateWithoutFlightsInput>
    create: XOR<aircraftsCreateWithoutFlightsInput, aircraftsUncheckedCreateWithoutFlightsInput>
    where?: aircraftsWhereInput
  }

  export type aircraftsUpdateToOneWithWhereWithoutFlightsInput = {
    where?: aircraftsWhereInput
    data: XOR<aircraftsUpdateWithoutFlightsInput, aircraftsUncheckedUpdateWithoutFlightsInput>
  }

  export type aircraftsUpdateWithoutFlightsInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    airlines?: airlinesUpdateOneRequiredWithoutAircraftsNestedInput
    seats?: seatsUpdateManyWithoutAircraftsNestedInput
  }

  export type aircraftsUncheckedUpdateWithoutFlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    owner_name?: StringFieldUpdateOperationsInput | string
    seats?: seatsUncheckedUpdateManyWithoutAircraftsNestedInput
  }

  export type routesUpsertWithoutFlightsInput = {
    update: XOR<routesUpdateWithoutFlightsInput, routesUncheckedUpdateWithoutFlightsInput>
    create: XOR<routesCreateWithoutFlightsInput, routesUncheckedCreateWithoutFlightsInput>
    where?: routesWhereInput
  }

  export type routesUpdateToOneWithWhereWithoutFlightsInput = {
    where?: routesWhereInput
    data: XOR<routesUpdateWithoutFlightsInput, routesUncheckedUpdateWithoutFlightsInput>
  }

  export type routesUpdateWithoutFlightsInput = {
    airports_routes_departureToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_departureToairportsNestedInput
    airports_routes_destinationToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_destinationToairportsNestedInput
    uses?: usesUpdateManyWithoutRoutesNestedInput
  }

  export type routesUncheckedUpdateWithoutFlightsInput = {
    departure?: IntFieldUpdateOperationsInput | number
    destination?: IntFieldUpdateOperationsInput | number
    uses?: usesUncheckedUpdateManyWithoutRoutesNestedInput
  }

  export type ticketsUpsertWithWhereUniqueWithoutFlightsInput = {
    where: ticketsWhereUniqueInput
    update: XOR<ticketsUpdateWithoutFlightsInput, ticketsUncheckedUpdateWithoutFlightsInput>
    create: XOR<ticketsCreateWithoutFlightsInput, ticketsUncheckedCreateWithoutFlightsInput>
  }

  export type ticketsUpdateWithWhereUniqueWithoutFlightsInput = {
    where: ticketsWhereUniqueInput
    data: XOR<ticketsUpdateWithoutFlightsInput, ticketsUncheckedUpdateWithoutFlightsInput>
  }

  export type ticketsUpdateManyWithWhereWithoutFlightsInput = {
    where: ticketsScalarWhereInput
    data: XOR<ticketsUpdateManyMutationInput, ticketsUncheckedUpdateManyWithoutFlightsInput>
  }

  export type ticketsScalarWhereInput = {
    AND?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    OR?: ticketsScalarWhereInput[]
    NOT?: ticketsScalarWhereInput | ticketsScalarWhereInput[]
    code?: StringFilter<"tickets"> | string
    type?: StringNullableFilter<"tickets"> | string | null
    price?: FloatNullableFilter<"tickets"> | number | null
    fligt_code?: UuidNullableFilter<"tickets"> | string | null
  }

  export type flightsCreateWithoutRoutesInput = {
    code?: string
    duration?: number | null
    liftoff_date?: Date | string | null
    aircrafts?: aircraftsCreateNestedOneWithoutFlightsInput
    tickets?: ticketsCreateNestedManyWithoutFlightsInput
  }

  export type flightsUncheckedCreateWithoutRoutesInput = {
    code?: string
    duration?: number | null
    aircraft_id?: number | null
    liftoff_date?: Date | string | null
    tickets?: ticketsUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type flightsCreateOrConnectWithoutRoutesInput = {
    where: flightsWhereUniqueInput
    create: XOR<flightsCreateWithoutRoutesInput, flightsUncheckedCreateWithoutRoutesInput>
  }

  export type flightsCreateManyRoutesInputEnvelope = {
    data: flightsCreateManyRoutesInput | flightsCreateManyRoutesInput[]
    skipDuplicates?: boolean
  }

  export type airportsCreateWithoutRoutes_routes_departureToairportsInput = {
    name: string
    city: string
    country: string
    time_zone: number
    routes_routes_destinationToairports?: routesCreateNestedManyWithoutAirports_routes_destinationToairportsInput
  }

  export type airportsUncheckedCreateWithoutRoutes_routes_departureToairportsInput = {
    id?: number
    name: string
    city: string
    country: string
    time_zone: number
    routes_routes_destinationToairports?: routesUncheckedCreateNestedManyWithoutAirports_routes_destinationToairportsInput
  }

  export type airportsCreateOrConnectWithoutRoutes_routes_departureToairportsInput = {
    where: airportsWhereUniqueInput
    create: XOR<airportsCreateWithoutRoutes_routes_departureToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_departureToairportsInput>
  }

  export type airportsCreateWithoutRoutes_routes_destinationToairportsInput = {
    name: string
    city: string
    country: string
    time_zone: number
    routes_routes_departureToairports?: routesCreateNestedManyWithoutAirports_routes_departureToairportsInput
  }

  export type airportsUncheckedCreateWithoutRoutes_routes_destinationToairportsInput = {
    id?: number
    name: string
    city: string
    country: string
    time_zone: number
    routes_routes_departureToairports?: routesUncheckedCreateNestedManyWithoutAirports_routes_departureToairportsInput
  }

  export type airportsCreateOrConnectWithoutRoutes_routes_destinationToairportsInput = {
    where: airportsWhereUniqueInput
    create: XOR<airportsCreateWithoutRoutes_routes_destinationToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_destinationToairportsInput>
  }

  export type usesCreateWithoutRoutesInput = {
    airlines?: airlinesCreateNestedOneWithoutUsesInput
  }

  export type usesUncheckedCreateWithoutRoutesInput = {
    id?: number
    airline_name?: string | null
  }

  export type usesCreateOrConnectWithoutRoutesInput = {
    where: usesWhereUniqueInput
    create: XOR<usesCreateWithoutRoutesInput, usesUncheckedCreateWithoutRoutesInput>
  }

  export type usesCreateManyRoutesInputEnvelope = {
    data: usesCreateManyRoutesInput | usesCreateManyRoutesInput[]
    skipDuplicates?: boolean
  }

  export type flightsUpsertWithWhereUniqueWithoutRoutesInput = {
    where: flightsWhereUniqueInput
    update: XOR<flightsUpdateWithoutRoutesInput, flightsUncheckedUpdateWithoutRoutesInput>
    create: XOR<flightsCreateWithoutRoutesInput, flightsUncheckedCreateWithoutRoutesInput>
  }

  export type flightsUpdateWithWhereUniqueWithoutRoutesInput = {
    where: flightsWhereUniqueInput
    data: XOR<flightsUpdateWithoutRoutesInput, flightsUncheckedUpdateWithoutRoutesInput>
  }

  export type flightsUpdateManyWithWhereWithoutRoutesInput = {
    where: flightsScalarWhereInput
    data: XOR<flightsUpdateManyMutationInput, flightsUncheckedUpdateManyWithoutRoutesInput>
  }

  export type airportsUpsertWithoutRoutes_routes_departureToairportsInput = {
    update: XOR<airportsUpdateWithoutRoutes_routes_departureToairportsInput, airportsUncheckedUpdateWithoutRoutes_routes_departureToairportsInput>
    create: XOR<airportsCreateWithoutRoutes_routes_departureToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_departureToairportsInput>
    where?: airportsWhereInput
  }

  export type airportsUpdateToOneWithWhereWithoutRoutes_routes_departureToairportsInput = {
    where?: airportsWhereInput
    data: XOR<airportsUpdateWithoutRoutes_routes_departureToairportsInput, airportsUncheckedUpdateWithoutRoutes_routes_departureToairportsInput>
  }

  export type airportsUpdateWithoutRoutes_routes_departureToairportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
    routes_routes_destinationToairports?: routesUpdateManyWithoutAirports_routes_destinationToairportsNestedInput
  }

  export type airportsUncheckedUpdateWithoutRoutes_routes_departureToairportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
    routes_routes_destinationToairports?: routesUncheckedUpdateManyWithoutAirports_routes_destinationToairportsNestedInput
  }

  export type airportsUpsertWithoutRoutes_routes_destinationToairportsInput = {
    update: XOR<airportsUpdateWithoutRoutes_routes_destinationToairportsInput, airportsUncheckedUpdateWithoutRoutes_routes_destinationToairportsInput>
    create: XOR<airportsCreateWithoutRoutes_routes_destinationToairportsInput, airportsUncheckedCreateWithoutRoutes_routes_destinationToairportsInput>
    where?: airportsWhereInput
  }

  export type airportsUpdateToOneWithWhereWithoutRoutes_routes_destinationToairportsInput = {
    where?: airportsWhereInput
    data: XOR<airportsUpdateWithoutRoutes_routes_destinationToairportsInput, airportsUncheckedUpdateWithoutRoutes_routes_destinationToairportsInput>
  }

  export type airportsUpdateWithoutRoutes_routes_destinationToairportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
    routes_routes_departureToairports?: routesUpdateManyWithoutAirports_routes_departureToairportsNestedInput
  }

  export type airportsUncheckedUpdateWithoutRoutes_routes_destinationToairportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    time_zone?: IntFieldUpdateOperationsInput | number
    routes_routes_departureToairports?: routesUncheckedUpdateManyWithoutAirports_routes_departureToairportsNestedInput
  }

  export type usesUpsertWithWhereUniqueWithoutRoutesInput = {
    where: usesWhereUniqueInput
    update: XOR<usesUpdateWithoutRoutesInput, usesUncheckedUpdateWithoutRoutesInput>
    create: XOR<usesCreateWithoutRoutesInput, usesUncheckedCreateWithoutRoutesInput>
  }

  export type usesUpdateWithWhereUniqueWithoutRoutesInput = {
    where: usesWhereUniqueInput
    data: XOR<usesUpdateWithoutRoutesInput, usesUncheckedUpdateWithoutRoutesInput>
  }

  export type usesUpdateManyWithWhereWithoutRoutesInput = {
    where: usesScalarWhereInput
    data: XOR<usesUpdateManyMutationInput, usesUncheckedUpdateManyWithoutRoutesInput>
  }

  export type bookingsCreateWithoutSeatsInput = {
    extras?: extrasCreateNestedOneWithoutBookingsInput
    tickets?: ticketsCreateNestedOneWithoutBookingsInput
    trips?: tripsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutSeatsInput = {
    id?: number
    ticket_code?: string | null
    trip_id?: number | null
    extras_id?: number | null
  }

  export type bookingsCreateOrConnectWithoutSeatsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutSeatsInput, bookingsUncheckedCreateWithoutSeatsInput>
  }

  export type bookingsCreateManySeatsInputEnvelope = {
    data: bookingsCreateManySeatsInput | bookingsCreateManySeatsInput[]
    skipDuplicates?: boolean
  }

  export type aircraftsCreateWithoutSeatsInput = {
    model?: string | null
    seats_capacity?: number | null
    airlines: airlinesCreateNestedOneWithoutAircraftsInput
    flights?: flightsCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsUncheckedCreateWithoutSeatsInput = {
    id?: number
    model?: string | null
    seats_capacity?: number | null
    owner_name: string
    flights?: flightsUncheckedCreateNestedManyWithoutAircraftsInput
  }

  export type aircraftsCreateOrConnectWithoutSeatsInput = {
    where: aircraftsWhereUniqueInput
    create: XOR<aircraftsCreateWithoutSeatsInput, aircraftsUncheckedCreateWithoutSeatsInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutSeatsInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutSeatsInput, bookingsUncheckedUpdateWithoutSeatsInput>
    create: XOR<bookingsCreateWithoutSeatsInput, bookingsUncheckedCreateWithoutSeatsInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutSeatsInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutSeatsInput, bookingsUncheckedUpdateWithoutSeatsInput>
  }

  export type bookingsUpdateManyWithWhereWithoutSeatsInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutSeatsInput>
  }

  export type aircraftsUpsertWithoutSeatsInput = {
    update: XOR<aircraftsUpdateWithoutSeatsInput, aircraftsUncheckedUpdateWithoutSeatsInput>
    create: XOR<aircraftsCreateWithoutSeatsInput, aircraftsUncheckedCreateWithoutSeatsInput>
    where?: aircraftsWhereInput
  }

  export type aircraftsUpdateToOneWithWhereWithoutSeatsInput = {
    where?: aircraftsWhereInput
    data: XOR<aircraftsUpdateWithoutSeatsInput, aircraftsUncheckedUpdateWithoutSeatsInput>
  }

  export type aircraftsUpdateWithoutSeatsInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    airlines?: airlinesUpdateOneRequiredWithoutAircraftsNestedInput
    flights?: flightsUpdateManyWithoutAircraftsNestedInput
  }

  export type aircraftsUncheckedUpdateWithoutSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    owner_name?: StringFieldUpdateOperationsInput | string
    flights?: flightsUncheckedUpdateManyWithoutAircraftsNestedInput
  }

  export type bookingsCreateWithoutTicketsInput = {
    extras?: extrasCreateNestedOneWithoutBookingsInput
    seats?: seatsCreateNestedOneWithoutBookingsInput
    trips?: tripsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutTicketsInput = {
    id?: number
    seat_id?: number | null
    trip_id?: number | null
    extras_id?: number | null
  }

  export type bookingsCreateOrConnectWithoutTicketsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutTicketsInput, bookingsUncheckedCreateWithoutTicketsInput>
  }

  export type bookingsCreateManyTicketsInputEnvelope = {
    data: bookingsCreateManyTicketsInput | bookingsCreateManyTicketsInput[]
    skipDuplicates?: boolean
  }

  export type flightsCreateWithoutTicketsInput = {
    code?: string
    duration?: number | null
    liftoff_date?: Date | string | null
    aircrafts?: aircraftsCreateNestedOneWithoutFlightsInput
    routes?: routesCreateNestedOneWithoutFlightsInput
  }

  export type flightsUncheckedCreateWithoutTicketsInput = {
    code?: string
    duration?: number | null
    aircraft_id?: number | null
    liftoff_date?: Date | string | null
    route_departure?: number | null
    route_destination?: number | null
  }

  export type flightsCreateOrConnectWithoutTicketsInput = {
    where: flightsWhereUniqueInput
    create: XOR<flightsCreateWithoutTicketsInput, flightsUncheckedCreateWithoutTicketsInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutTicketsInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutTicketsInput, bookingsUncheckedUpdateWithoutTicketsInput>
    create: XOR<bookingsCreateWithoutTicketsInput, bookingsUncheckedCreateWithoutTicketsInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutTicketsInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutTicketsInput, bookingsUncheckedUpdateWithoutTicketsInput>
  }

  export type bookingsUpdateManyWithWhereWithoutTicketsInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutTicketsInput>
  }

  export type flightsUpsertWithoutTicketsInput = {
    update: XOR<flightsUpdateWithoutTicketsInput, flightsUncheckedUpdateWithoutTicketsInput>
    create: XOR<flightsCreateWithoutTicketsInput, flightsUncheckedCreateWithoutTicketsInput>
    where?: flightsWhereInput
  }

  export type flightsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: flightsWhereInput
    data: XOR<flightsUpdateWithoutTicketsInput, flightsUncheckedUpdateWithoutTicketsInput>
  }

  export type flightsUpdateWithoutTicketsInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aircrafts?: aircraftsUpdateOneWithoutFlightsNestedInput
    routes?: routesUpdateOneWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateWithoutTicketsInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsCreateWithoutTripsInput = {
    extras?: extrasCreateNestedOneWithoutBookingsInput
    seats?: seatsCreateNestedOneWithoutBookingsInput
    tickets?: ticketsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutTripsInput = {
    id?: number
    ticket_code?: string | null
    seat_id?: number | null
    extras_id?: number | null
  }

  export type bookingsCreateOrConnectWithoutTripsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput>
  }

  export type bookingsCreateManyTripsInputEnvelope = {
    data: bookingsCreateManyTripsInput | bookingsCreateManyTripsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTripsInput = {
    name: string
    email: string
    password: string
    role?: number | null
  }

  export type usersUncheckedCreateWithoutTripsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: number | null
  }

  export type usersCreateOrConnectWithoutTripsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTripsInput, usersUncheckedCreateWithoutTripsInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutTripsInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutTripsInput, bookingsUncheckedUpdateWithoutTripsInput>
    create: XOR<bookingsCreateWithoutTripsInput, bookingsUncheckedCreateWithoutTripsInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutTripsInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutTripsInput, bookingsUncheckedUpdateWithoutTripsInput>
  }

  export type bookingsUpdateManyWithWhereWithoutTripsInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutTripsInput>
  }

  export type usersUpsertWithoutTripsInput = {
    update: XOR<usersUpdateWithoutTripsInput, usersUncheckedUpdateWithoutTripsInput>
    create: XOR<usersCreateWithoutTripsInput, usersUncheckedCreateWithoutTripsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTripsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTripsInput, usersUncheckedUpdateWithoutTripsInput>
  }

  export type usersUpdateWithoutTripsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tripsCreateWithoutUsersInput = {
    creation_date?: Date | string | null
    bookings?: bookingsCreateNestedManyWithoutTripsInput
  }

  export type tripsUncheckedCreateWithoutUsersInput = {
    id?: number
    creation_date?: Date | string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutTripsInput
  }

  export type tripsCreateOrConnectWithoutUsersInput = {
    where: tripsWhereUniqueInput
    create: XOR<tripsCreateWithoutUsersInput, tripsUncheckedCreateWithoutUsersInput>
  }

  export type tripsCreateManyUsersInputEnvelope = {
    data: tripsCreateManyUsersInput | tripsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tripsUpsertWithWhereUniqueWithoutUsersInput = {
    where: tripsWhereUniqueInput
    update: XOR<tripsUpdateWithoutUsersInput, tripsUncheckedUpdateWithoutUsersInput>
    create: XOR<tripsCreateWithoutUsersInput, tripsUncheckedCreateWithoutUsersInput>
  }

  export type tripsUpdateWithWhereUniqueWithoutUsersInput = {
    where: tripsWhereUniqueInput
    data: XOR<tripsUpdateWithoutUsersInput, tripsUncheckedUpdateWithoutUsersInput>
  }

  export type tripsUpdateManyWithWhereWithoutUsersInput = {
    where: tripsScalarWhereInput
    data: XOR<tripsUpdateManyMutationInput, tripsUncheckedUpdateManyWithoutUsersInput>
  }

  export type tripsScalarWhereInput = {
    AND?: tripsScalarWhereInput | tripsScalarWhereInput[]
    OR?: tripsScalarWhereInput[]
    NOT?: tripsScalarWhereInput | tripsScalarWhereInput[]
    id?: IntFilter<"trips"> | number
    creation_date?: DateTimeNullableFilter<"trips"> | Date | string | null
    user_id?: IntNullableFilter<"trips"> | number | null
  }

  export type airlinesCreateWithoutUsesInput = {
    name: string
    password: string
    country: string
    motto?: string | null
    aircrafts?: aircraftsCreateNestedManyWithoutAirlinesInput
  }

  export type airlinesUncheckedCreateWithoutUsesInput = {
    name: string
    password: string
    country: string
    motto?: string | null
    aircrafts?: aircraftsUncheckedCreateNestedManyWithoutAirlinesInput
  }

  export type airlinesCreateOrConnectWithoutUsesInput = {
    where: airlinesWhereUniqueInput
    create: XOR<airlinesCreateWithoutUsesInput, airlinesUncheckedCreateWithoutUsesInput>
  }

  export type routesCreateWithoutUsesInput = {
    flights?: flightsCreateNestedManyWithoutRoutesInput
    airports_routes_departureToairports: airportsCreateNestedOneWithoutRoutes_routes_departureToairportsInput
    airports_routes_destinationToairports: airportsCreateNestedOneWithoutRoutes_routes_destinationToairportsInput
  }

  export type routesUncheckedCreateWithoutUsesInput = {
    departure: number
    destination: number
    flights?: flightsUncheckedCreateNestedManyWithoutRoutesInput
  }

  export type routesCreateOrConnectWithoutUsesInput = {
    where: routesWhereUniqueInput
    create: XOR<routesCreateWithoutUsesInput, routesUncheckedCreateWithoutUsesInput>
  }

  export type airlinesUpsertWithoutUsesInput = {
    update: XOR<airlinesUpdateWithoutUsesInput, airlinesUncheckedUpdateWithoutUsesInput>
    create: XOR<airlinesCreateWithoutUsesInput, airlinesUncheckedCreateWithoutUsesInput>
    where?: airlinesWhereInput
  }

  export type airlinesUpdateToOneWithWhereWithoutUsesInput = {
    where?: airlinesWhereInput
    data: XOR<airlinesUpdateWithoutUsesInput, airlinesUncheckedUpdateWithoutUsesInput>
  }

  export type airlinesUpdateWithoutUsesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    aircrafts?: aircraftsUpdateManyWithoutAirlinesNestedInput
  }

  export type airlinesUncheckedUpdateWithoutUsesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    aircrafts?: aircraftsUncheckedUpdateManyWithoutAirlinesNestedInput
  }

  export type routesUpsertWithoutUsesInput = {
    update: XOR<routesUpdateWithoutUsesInput, routesUncheckedUpdateWithoutUsesInput>
    create: XOR<routesCreateWithoutUsesInput, routesUncheckedCreateWithoutUsesInput>
    where?: routesWhereInput
  }

  export type routesUpdateToOneWithWhereWithoutUsesInput = {
    where?: routesWhereInput
    data: XOR<routesUpdateWithoutUsesInput, routesUncheckedUpdateWithoutUsesInput>
  }

  export type routesUpdateWithoutUsesInput = {
    flights?: flightsUpdateManyWithoutRoutesNestedInput
    airports_routes_departureToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_departureToairportsNestedInput
    airports_routes_destinationToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_destinationToairportsNestedInput
  }

  export type routesUncheckedUpdateWithoutUsesInput = {
    departure?: IntFieldUpdateOperationsInput | number
    destination?: IntFieldUpdateOperationsInput | number
    flights?: flightsUncheckedUpdateManyWithoutRoutesNestedInput
  }

  export type flightsCreateManyAircraftsInput = {
    code?: string
    duration?: number | null
    liftoff_date?: Date | string | null
    route_departure?: number | null
    route_destination?: number | null
  }

  export type seatsCreateManyAircraftsInput = {
    id?: number
    postion?: string | null
  }

  export type flightsUpdateWithoutAircraftsInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    routes?: routesUpdateOneWithoutFlightsNestedInput
    tickets?: ticketsUpdateManyWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateWithoutAircraftsInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: ticketsUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateManyWithoutAircraftsInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seatsUpdateWithoutAircraftsInput = {
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUpdateManyWithoutSeatsNestedInput
  }

  export type seatsUncheckedUpdateWithoutAircraftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postion?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutSeatsNestedInput
  }

  export type seatsUncheckedUpdateManyWithoutAircraftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aircraftsCreateManyAirlinesInput = {
    id?: number
    model?: string | null
    seats_capacity?: number | null
  }

  export type usesCreateManyAirlinesInput = {
    id?: number
    route_departure?: number | null
    route_destination?: number | null
  }

  export type aircraftsUpdateWithoutAirlinesInput = {
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    flights?: flightsUpdateManyWithoutAircraftsNestedInput
    seats?: seatsUpdateManyWithoutAircraftsNestedInput
  }

  export type aircraftsUncheckedUpdateWithoutAirlinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
    flights?: flightsUncheckedUpdateManyWithoutAircraftsNestedInput
    seats?: seatsUncheckedUpdateManyWithoutAircraftsNestedInput
  }

  export type aircraftsUncheckedUpdateManyWithoutAirlinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    seats_capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usesUpdateWithoutAirlinesInput = {
    routes?: routesUpdateOneWithoutUsesNestedInput
  }

  export type usesUncheckedUpdateWithoutAirlinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usesUncheckedUpdateManyWithoutAirlinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    route_departure?: NullableIntFieldUpdateOperationsInput | number | null
    route_destination?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type routesCreateManyAirports_routes_departureToairportsInput = {
    destination: number
  }

  export type routesCreateManyAirports_routes_destinationToairportsInput = {
    departure: number
  }

  export type routesUpdateWithoutAirports_routes_departureToairportsInput = {
    flights?: flightsUpdateManyWithoutRoutesNestedInput
    airports_routes_destinationToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_destinationToairportsNestedInput
    uses?: usesUpdateManyWithoutRoutesNestedInput
  }

  export type routesUncheckedUpdateWithoutAirports_routes_departureToairportsInput = {
    destination?: IntFieldUpdateOperationsInput | number
    flights?: flightsUncheckedUpdateManyWithoutRoutesNestedInput
    uses?: usesUncheckedUpdateManyWithoutRoutesNestedInput
  }

  export type routesUncheckedUpdateManyWithoutAirports_routes_departureToairportsInput = {
    destination?: IntFieldUpdateOperationsInput | number
  }

  export type routesUpdateWithoutAirports_routes_destinationToairportsInput = {
    flights?: flightsUpdateManyWithoutRoutesNestedInput
    airports_routes_departureToairports?: airportsUpdateOneRequiredWithoutRoutes_routes_departureToairportsNestedInput
    uses?: usesUpdateManyWithoutRoutesNestedInput
  }

  export type routesUncheckedUpdateWithoutAirports_routes_destinationToairportsInput = {
    departure?: IntFieldUpdateOperationsInput | number
    flights?: flightsUncheckedUpdateManyWithoutRoutesNestedInput
    uses?: usesUncheckedUpdateManyWithoutRoutesNestedInput
  }

  export type routesUncheckedUpdateManyWithoutAirports_routes_destinationToairportsInput = {
    departure?: IntFieldUpdateOperationsInput | number
  }

  export type bookingsCreateManyExtrasInput = {
    id?: number
    ticket_code?: string | null
    seat_id?: number | null
    trip_id?: number | null
  }

  export type bookingsUpdateWithoutExtrasInput = {
    seats?: seatsUpdateOneWithoutBookingsNestedInput
    tickets?: ticketsUpdateOneWithoutBookingsNestedInput
    trips?: tripsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutExtrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsUncheckedUpdateManyWithoutExtrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticketsCreateManyFlightsInput = {
    code: string
    type?: string | null
    price?: number | null
  }

  export type ticketsUpdateWithoutFlightsInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: bookingsUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateWithoutFlightsInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: bookingsUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type ticketsUncheckedUpdateManyWithoutFlightsInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type flightsCreateManyRoutesInput = {
    code?: string
    duration?: number | null
    aircraft_id?: number | null
    liftoff_date?: Date | string | null
  }

  export type usesCreateManyRoutesInput = {
    id?: number
    airline_name?: string | null
  }

  export type flightsUpdateWithoutRoutesInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aircrafts?: aircraftsUpdateOneWithoutFlightsNestedInput
    tickets?: ticketsUpdateManyWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateWithoutRoutesInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: ticketsUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type flightsUncheckedUpdateManyWithoutRoutesInput = {
    code?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    aircraft_id?: NullableIntFieldUpdateOperationsInput | number | null
    liftoff_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usesUpdateWithoutRoutesInput = {
    airlines?: airlinesUpdateOneWithoutUsesNestedInput
  }

  export type usesUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usesUncheckedUpdateManyWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    airline_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookingsCreateManySeatsInput = {
    id?: number
    ticket_code?: string | null
    trip_id?: number | null
    extras_id?: number | null
  }

  export type bookingsUpdateWithoutSeatsInput = {
    extras?: extrasUpdateOneWithoutBookingsNestedInput
    tickets?: ticketsUpdateOneWithoutBookingsNestedInput
    trips?: tripsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsUncheckedUpdateManyWithoutSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsCreateManyTicketsInput = {
    id?: number
    seat_id?: number | null
    trip_id?: number | null
    extras_id?: number | null
  }

  export type bookingsUpdateWithoutTicketsInput = {
    extras?: extrasUpdateOneWithoutBookingsNestedInput
    seats?: seatsUpdateOneWithoutBookingsNestedInput
    trips?: tripsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsUncheckedUpdateManyWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    trip_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsCreateManyTripsInput = {
    id?: number
    ticket_code?: string | null
    seat_id?: number | null
    extras_id?: number | null
  }

  export type bookingsUpdateWithoutTripsInput = {
    extras?: extrasUpdateOneWithoutBookingsNestedInput
    seats?: seatsUpdateOneWithoutBookingsNestedInput
    tickets?: ticketsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookingsUncheckedUpdateManyWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_code?: NullableStringFieldUpdateOperationsInput | string | null
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    extras_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tripsCreateManyUsersInput = {
    id?: number
    creation_date?: Date | string | null
  }

  export type tripsUpdateWithoutUsersInput = {
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutTripsNestedInput
  }

  export type tripsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}