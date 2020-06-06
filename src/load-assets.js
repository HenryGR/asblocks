import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import "@wordpress/block-library/build-style/editor.css";
import "@wordpress/format-library/build-style/style.css";

// Ideally this is imported where used in the block-library package.
import "@wordpress/notices";

import "./editor-styles.css";

import { registerCoreBlocks } from "@wordpress/block-library";
import "@wordpress/format-library";
registerCoreBlocks();
