import _ from "lodash";

export const omitNullish = <T extends object>(o: T) => _.omitBy(o, _.isNull);
