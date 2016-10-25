class ResponseFormater {

  static success(data) {
    return {
      status: true,
      code: 200,
      message: null,
      data
    }
  }
  static error(data, message) {
    return {
      status: false,
      code: 500,
      message: message || 'server error',
      data
    }
  }
  static notFound(data) {
    return {
      status: false,
      code: 404,
      message: 'not found',
      data
    }
  }
}

module.exports = ResponseFormater;
