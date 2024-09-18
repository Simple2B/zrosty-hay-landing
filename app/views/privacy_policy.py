from flask import render_template, Blueprint


privacy_policy_blueprint = Blueprint("privacy-policy", __name__, url_prefix="/privacy-policy")


@privacy_policy_blueprint.route("/", methods=["GET"])
def get_all():
    return render_template("privacy_policy.html")


@privacy_policy_blueprint.route("/no-content")
def no_content():
    """htmx request"""
    return "", 200
