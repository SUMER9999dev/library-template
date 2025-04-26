/* eslint-disable roblox/no-array-pairs */
// credits to littensy for this one!

const global = _G as Record<never, unknown>;

for (const [key] of pairs(global)) {
	if (typeOf(key) !== "Instance") continue;
	if (!(key as Instance).IsA("ModuleScript")) continue;

	global[key as never] = undefined as never;
}
