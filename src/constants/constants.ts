export const LOGIN_MESSAGE = {
  success: "로그인에 성공했습니다.",
  fail: "로그인에 실패했습니다. 다시 시도해주세요.",
}

export const ERROR_GUIDE = (type: string) => {
  switch (type) {
    case "email":
      return "올바른 이메일을 입력해주세요."
    case "password":
      return "비밀번호는 6자 이상이어야 합니다."
    default:
      return "다시 시도해주세요."
  }
}