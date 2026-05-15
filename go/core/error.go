package core

type MyIpError struct {
	IsMyIpError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMyIpError(code string, msg string, ctx *Context) *MyIpError {
	return &MyIpError{
		IsMyIpError: true,
		Sdk:              "MyIp",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MyIpError) Error() string {
	return e.Msg
}
