defmodule LearnPhoenixWeb.PageController do
  use LearnPhoenixWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")

  end
  
  def group(conn, _params) do
    render(conn, "group.html")
  end
end
