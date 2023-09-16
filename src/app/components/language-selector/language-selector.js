import { useRouter } from "next/navigation";
import { useSelect, resetIdCounter } from "downshift";
import classNames from "classnames";
import Link from "next/link";
import styles from "./language-selector.module.css";

export const LanguageSelector = () => {
  const { locale, locales, asPath } = useRouter();
  const items = locales;
  console.log("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷");
  console.log("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷");
  console.log("ITEMS: ", useRouter());
  console.log("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷");
  console.log("🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷");
  let languageNames = [];
  // let languageNames = new Intl.DisplayNames([locale], { type: "language" });

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  resetIdCounter();

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
              <Link href={asPath} locale={item} className={styles.link}>
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
