from flask import render_template, Blueprint


main_blueprint = Blueprint("main", __name__)


@main_blueprint.route("/")
def index():
    return render_template("index.html")


@main_blueprint.route("/no-content")
def no_content():
    """htmx request"""
    return "", 200
