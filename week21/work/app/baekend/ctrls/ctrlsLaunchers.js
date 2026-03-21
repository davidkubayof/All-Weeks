import { createLauncherD, deleteLauncherD, getLauncherD, getLaunchersD, updateLauncherD } from "../DAL/launchers.js";


export async function getLaunchers(req, res) {
    const launchers = await getLaunchersD();
    res.json({ launchers })
}
export async function getLauncher(req, res) {
    const { id } = req.params
    if (!id) { return res.status(400).json('The field id is missing.') }
    const launcher = await getLauncherD(id)
    res.json({ launcher })
}
export async function createLauncher(req, res) {
    const obj = req.body;
    const resulat = await createLauncherD(obj)
    res.json(resulat)
}
export async function updateLauncher(req, res) {
    const { id } = req.params;
    const obj = req.body;
    if (!id) { return res.status(400).json('The field id is missing.') }
    const launcher = await updateLauncherD(id,obj)
    res.json({ launcher })
}
export async function deleteLauncher(req, res) {
    const { id } = req.params;
    if (!id) { return res.status(400).json('The field id is missing.') }
    const launcher = await deleteLauncherD(id)
    res.json({ launcher })
}

