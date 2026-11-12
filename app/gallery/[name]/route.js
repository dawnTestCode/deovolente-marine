import { serveImage } from "../../../lib/imgdata/index.js";

export function GET(request, { params }) {
  return serveImage("/gallery/" + params.name);
}
