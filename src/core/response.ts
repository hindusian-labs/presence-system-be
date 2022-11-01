export enum StatusType {
  Success = "success",
  Fail = "fail",
  Error = "error",
}

interface SuccessBody {
  readonly status: StatusType.Success;
  data: unknown;
}

interface FailBody {
  readonly status: StatusType.Fail;
  data: unknown;
}

interface ErrorBody {
  readonly status: StatusType.Error;
  message: unknown;
}

type ResponseBody = SuccessBody | FailBody | ErrorBody;

export function createResponseBody(
  type: StatusType,
  arg: unknown
): ResponseBody {
  if (type === StatusType.Success) {
    const response: SuccessBody = {
      status: type,
      data: arg,
    };

    return response;
  } else if (type === StatusType.Fail) {
    const response: FailBody = {
      status: type,
      data: arg,
    };

    return response;
  } else {
    const response: ErrorBody = {
      status: type,
      message: arg,
    };
    return response;
  }
}
