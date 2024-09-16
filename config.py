import os
from functools import lru_cache
import tomllib
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
APP_ENV = os.environ.get("APP_ENV", "development")


def get_version() -> str:
    with open("pyproject.toml", "rb") as f:
        return tomllib.load(f)["tool"]["poetry"]["version"]


class BaseConfig(BaseSettings):
    """Base configuration."""

    IS_API: bool = False

    ENV: str = "base"
    APP_NAME: str = "Zrosty Hay Landing"
    SECRET_KEY: str
    VERSION: str = get_version()

    @staticmethod
    def configure(app):
        # Implement this method to do further configuration on your app.
        pass

    model_config = SettingsConfigDict(
        extra="allow",
        env_file=("project.env", ".env.dev", ".env"),
    )


class DevelopmentConfig(BaseConfig):
    """Development configuration."""

    DEBUG: bool = True


class ProductionConfig(BaseConfig):
    """Production configuration."""

    ALCHEMICAL_DATABASE_URL: str = os.environ.get(
        "DATABASE_URL", "sqlite:///" + os.path.join(BASE_DIR, "database.sqlite3")
    )
    WTF_CSRF_ENABLED: bool = True


@lru_cache
def config(name: str = APP_ENV) -> DevelopmentConfig | ProductionConfig:
    CONF_MAP = dict(
        development=DevelopmentConfig,
        production=ProductionConfig,
    )
    configuration = CONF_MAP[name]()
    configuration.ENV = name
    return configuration
