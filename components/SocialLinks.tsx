import { useSection } from "context/section";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
  const { currentSection } = useSection();
  return (
    <>
      {page === "index" ? (
        <div className="hidden fixed left-10 bottom-1/3 md:flex flex-col w-6 h-52 items-center justify-between">
          {navLinks.map((nav) => {
            return (
              <a
                title={nav.text}
                href={nav.url}
                key={nav.url}
                className={`transition-all outline-marrsdark dark:outline-textlight hover:bg-marrsgreen dark:hover:bg-carrigreen ${
                  currentSection === nav.text.toLowerCase()
                    ? "bg-marrsgreen dark:bg-carrigreen rotate-0"
                    : "opacity-50 focus-visible:opacity-100 hover:opacity-80 rotate-45 hover:rotate-12"
                } w-3 h-3 border-2 border-marrsgreen dark:border-carrigreen`}
              ></a>
            );
          })}
        </div>
      ) : (
        <div className="hidden fixed left-10 bottom-0 md:flex flex-col w-6 h-56 items-center justify-between">
          <div className="-rotate-90 text-lg tracking-widest">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
            >
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </div>
          <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
        </div>
      )}
      <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between">
        <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              title={social.title}
              href={social.link}
              className="scale-110 rounded link-outline"
            >
              {social.svg}
            </a>
          ))}
        </div>
        <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
      </div>
    </>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "Muhammad Arslan Github Profile",
    link: "https://www.github.com/in/m-arslandev/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Muhammad Arslan's LinkedIn Profile",
    link: "https://www.linkedin.com/in/m-arslandev/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
   {
  id: 3,
  title: "Muhammad Arslan's Profile on instagram",
  link: "https://www.instagram.com/muhammadarslandev?igsh=MXhrd24xdncxd2dqcA==",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
    >
      <path d="M12 2.163c3.1 0 3.49.011 4.726.068 1.268.061 2.436.486 3.387 1.437.95.951 1.375 2.12 1.437 3.388.057 1.236.068 1.626.068 4.726s-.011 3.49-.068 4.726c-.061 1.268-.486 2.437-1.437 3.388-.951.951-2.12 1.376-3.388 1.437-1.236.057-1.626.068-4.726.068s-3.49-.011-4.726-.068c-1.268-.061-2.437-.486-3.388-1.437-.951-.951-1.376-2.12-1.437-3.388-.057-1.236-.068-1.626-.068-4.726s.011-3.49.068-4.726c.061-1.268.486-2.437 1.437-3.388 0-.001 0-.001.001-.001 1.268-.951 2.437-1.376 3.388-1.437 1.236-.057 1.626-.068 4.726-.068zm0-2.163c-3.128 0-3.496.011-4.724.068-1.168.057-2.283.447-3.162 1.326-.88.88-1.268 1.995-1.326 3.162-.057 1.228-.068 1.596-.068 4.724s.011 3.496.068 4.724c.057 1.168.447 2.283 1.326 3.162.88.88 1.995 1.269 3.162 1.326 1.228.057 1.596.068 4.724.068s3.496-.011 4.724-.068c1.168-.057 2.283-.447 3.162-1.326.88-.88 1.268-1.995 1.326-3.162.057-1.228.068-1.596.068-4.724s-.011-3.496-.068-4.724c-.057-1.168-.447-2.283-1.326-3.162-.88-.88-1.995-1.269-3.162-1.326-1.228-.057-1.596-.068-4.724-.068zM12 5.838c-3.358 0-6.061 2.704-6.061 6.062s2.703 6.062 6.061 6.062 6.061-2.704 6.061-6.062-2.703-6.062-6.061-6.062zm0 10.85c-2.654 0-4.787-2.132-4.787-4.787s2.133-4.787 4.787-4.787 4.787 2.132 4.787 4.787-2.133 4.787-4.787 4.787zm6.257-9.465c-.38 0-.746.147-1.013.413-.267.267-.413.633-.413 1.013 0 .38.147.746.413 1.013.267.267.633.413 1.013.413s.746-.146 1.013-.413c.267-.267.413-.633.413-1.013 0-.38-.146-.746-.413-1.013-.267-.266-.633-.413-1.013-.413z"></path>
    </svg>
  ),
},

  {
    id: 4,
    title: "Muhammad Arslan's Profile on Facebook",
    link: "https://www.facebook.com/muhammad.arslan.928588?mibextid=ZbWKwL",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
      </svg>
    ),
  },
];

const navLinks = [
  {
    url: "#",
    text: "Welcome",
  },
  {
    url: "#whoami",
    text: "Who am i?",
  },
  {
    url: "#projects",
    text: "Projects",
  },
  {
    url: "#blog",
    text: "Blog",
  },
  {
    url: "#contact",
    text: "Contact",
  },
];

export default SocialLinks;
