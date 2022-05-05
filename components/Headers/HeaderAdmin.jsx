import Head from "next/head";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function BSComHeaderAdmin() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      console.log(currentTheme);
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <>
      <Head>
        <title>XDAO-A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-8 py-12 flex justify-between items-center">
        <h1>Header</h1>
        {renderThemeChanger()}
      </header>
    </>
  );
}
