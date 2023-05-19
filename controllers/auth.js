// Đăng ký tài khoản khách hàng.
exports.authen = async (req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        req.session.back = req.originalUrl;
        res.redirect("/users/login");
    }
}

exports.authenAdmin = async (req, res, next) => {
    if (req.session.user && req.session.user.role == 1) {
        next();
    } else {
        res.redirect("/portal/users/logIn");
    }
}

