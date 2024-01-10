export const SIGN_IN_MESSAGE = {
  success: "로그인에 성공했습니다.",
  fail: "로그인에 실패했습니다. 다시 시도해주세요.",
}

export const SIGN_UP_MESSAGE = {
  success: "회원가입이 완료되었습니다.",
  alreadyExist: "이미 가입된 이메일입니다.",
}

export const INPUT_ERROR = (type: string) => {
  switch (type) {
    case "email":
      return "올바른 이메일을 입력해주세요."
    case "password":
      return "비밀번호는 6자 이상이어야 합니다."
    case "passwordConfirm":
      return "비밀번호가 일치하지 않습니다."
    default:
      return "다시 시도해주세요."
  }
}

export const ERROR_COMMON_MESSAGE = '오류가 발생했습니다. 관리자에게 문의해주세요.'

export const ERROR_MESSAGE = {
  TASK : {
    insert: 'Task 등록에 실패했습니다.',
  }
}