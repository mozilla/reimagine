import { usePathname } from "next/navigation";
import { useSelect } from "downshift";
import classNames from "classnames";
import Link from "next/link";
import styles from "./language-selector.module.css";
import * as gtag from "/lib/gtag.ts";

export const LanguageSelector = () => {
  const locale = "en";
  const locales = ["en", "de"];
  const items = locales;
  const pathname = usePathname();
  let languageNames = new Intl.DisplayNames([locale], { type: "language" });

  // let languageNames = ["en", "de"];

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  const handleLanguageChange = (locale) => {
    gtag.event({
      action: `Locale change: ${locale}`,
      category: "Link click"
    })
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggle}
        type="button"
        {...getToggleButtonProps()}
      >
        <span className={styles.toggleText}>
          {selectedItem || locale}{" "}
          {isOpen ? (
            <span className={styles.arrow}>&#9650;</span>
          ) : (
            <span className={styles.arrow}>&#9660;</span>
          )}
        </span>
      </button>
      <ul
        {...getMenuProps()}
        className={classNames(styles.dropdown, isOpen && styles["open"])}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? { color: "#000" } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              className={styles.item}
            >
              <Link href={pathname} locale={item} className={styles.link} onClick={(item) => handleLanguageChange(item)}>
                {`${languageNames.of(item)} - ${item.toUpperCase()}`}
              </Link>
            </li>
          ))}
      </ul>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex="0" />
    </div>
  );
};
