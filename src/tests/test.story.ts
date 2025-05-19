(_G as Record<string, unknown>).NOCOLOR = true;

import { runCLI } from "@rbxts/jest";

const reloadTSRuntime = script.Parent!.FindFirstChild("reload-ts-runtime")! as ModuleScript;

export = () => {
	const [status, result] = runCLI(
		script,
		{
			testMatch: ["tests/**/*.test"],
			verbose: false,
			ci: false,
			setupFiles: [reloadTSRuntime],
		},
		[script.Parent!],
	).awaitStatus();

	if (status === Promise.Status.Rejected) {
		warn(`Tests failed:\n${result}`);
	}
};
