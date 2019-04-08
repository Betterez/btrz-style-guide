defmodule BtrzCredoStyle.MixProject do
  use Mix.Project

  @github_url "https://github.com/Betterez/btrz-style-guide"
  @version "0.1.0"

  def project do
    [
      app: :btrz_credo_style,
      version: @version,
      elixir: "~> 1.7",
      source_url: @github_url,
      homepage_url: @github_url,
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      package: package(),
      description: "Betterez credo style guide for Elixir projects"
    ]
  end

  def package do
    [
      name: "btrz_credo_style",
      maintainers: ["Betterez"],
      licenses: ["MIT"],
      links: %{"GitHub" => @github_url}
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:credo, "~> 1.0.0", only: [:dev, :test], runtime: false}
    ]
  end
end
