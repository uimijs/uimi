
export class ReturnCode {
	static SUCCESS = 0;
	static INVALID = -1;
	static DB_SAVE_ERROR = -2;
	static DB_READ_ERROR = -3;
	static CACHE_SAVE_ERROR = -4;
	static CACHE_READ_ERROR = -5;
	static FILE_SAVE_ERROR = -6;
	static LOGIN_ERROR = -7;
	static NOT_EXISTS = -8;
	static JSON_PARSE_FAIL = -9;
	static TYPE_ERROR = -10;
	static NUMBER_MATCH_ERROR = -11;
	static EMPTY_PARAMS = -12;
	static DATA_EXISTS = -13;
	static AUTH_ERROR = -14;

	static OTHER_LOGIN = -16;
	static VERSION_INVALID = -17;

	static CURL_ERROR = -18;

	static RECORD_NOT_FOUND = -19;
	// 记录未找到
	static DELETE_FAILED = -20;
	// 删除失败
	static ADD_FAILED = -21;
	// 添加记录失败
	static UPDATE_FAILED = -22;
	// 添加记录失败

	static PARAM_INVALID = -995;
	// 参数无效
	static ACCESS_TOKEN_TIMEOUT = -996;
	static SESSION_TIMEOUT = -997;
	static UNKNOWN = -998;
	static EXCEPTION = -999;
}
export class Return {
	protected userInfo;
	static seccuss(data:any = [], msg = '操作成功', code = ReturnCode.SUCCESS) {
		return { data, msg, code }
	}
	static error(msg = '操作失败', data:any = [], code = ReturnCode.INVALID) {
		return { data, msg, code }
	}
	static exception(msg = '操作失败', data:any = [], code = ReturnCode.INVALID) {
		return { data, msg, code }
	}
}